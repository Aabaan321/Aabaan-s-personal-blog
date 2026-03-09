// ===== CHAT & AI LOGIC =====

// Proxy URLs
const OPENAI_PROXY = '/api/openai';
const DEEPGRAM_LISTEN_PROXY = '/api/deepgram-listen';
const DEEPGRAM_SPEAK_PROXY = '/api/deepgram-speak';

// ===== DEEPGRAM VOICE INPUT (MIC) =====
async function setupVoice(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    let mediaRecorder, audioChunks = [], isRecording = false;

    btn.addEventListener('click', async () => {
        if (!isRecording) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
                mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
                mediaRecorder.onstop = async () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    audioChunks = [];

                    // Send directly as binary Buffer to our proxy
                    const response = await fetch(DEEPGRAM_LISTEN_PROXY, {
                        method: 'POST',
                        body: audioBlob,
                        headers: { 'Content-Type': 'audio/webm' }
                    });

                    const data = await response.json();
                    if (data.results && data.results.channels[0].alternatives[0]) {
                        const transcript = data.results.channels[0].alternatives[0].transcript;
                        if (transcript) {
                            input.value = transcript;
                            const sendBtnId = btnId.replace('mic-btn', 'chat-send');
                            const sendBtn = document.getElementById(sendBtnId);
                            if (sendBtn) sendBtn.click();
                        }
                    }
                    stream.getTracks().forEach(track => track.stop());
                };
                mediaRecorder.start(); isRecording = true;
                btn.classList.add('recording');
                btn.innerHTML = '<i class="fas fa-stop"></i>';
            } catch (err) {
                console.error('Mic Error:', err);
                alert('Could not access microphone.');
            }
        } else {
            mediaRecorder.stop(); isRecording = false;
            btn.classList.remove('recording');
            btn.innerHTML = '<i class="fas fa-microphone"></i>';
        }
    });
}

// ===== TTS PLAYBACK =====
window.currentAudio = null;
window.currentPlayingBtn = null;

async function playTTS(text, btnElement) {
    if (window.currentAudio && window.currentPlayingBtn !== btnElement) {
        window.currentAudio.pause();
        if (window.currentPlayingBtn) {
            window.currentPlayingBtn.classList.remove('playing');
            window.currentPlayingBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }

    if (btnElement.audioObj) {
        window.currentAudio = btnElement.audioObj;
        window.currentPlayingBtn = btnElement;
        if (btnElement.audioObj.paused) {
            if (btnElement.audioObj.ended || btnElement.audioObj.currentTime === btnElement.audioObj.duration) {
                btnElement.audioObj.currentTime = 0;
            }
            btnElement.audioObj.play();
        } else {
            btnElement.audioObj.pause();
        }
        return;
    }

    btnElement.classList.add('loading');
    btnElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    try {
        const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/\*/g, '');
        const response = await fetch(DEEPGRAM_SPEAK_PROXY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: cleanText })
        });

        if (!response.ok) throw new Error('TTS Proxy Error');

        const audioBlob = await response.blob();
        const audio = new Audio(URL.createObjectURL(audioBlob));
        btnElement.audioObj = audio;
        window.currentAudio = audio;
        window.currentPlayingBtn = btnElement;

        audio.onplay = () => {
            btnElement.classList.remove('loading');
            btnElement.classList.add('playing');
            btnElement.innerHTML = '<i class="fas fa-pause"></i>';
        };
        audio.onpause = () => {
            btnElement.classList.remove('playing');
            btnElement.innerHTML = '<i class="fas fa-play"></i>';
        };
        audio.onended = () => {
            btnElement.classList.remove('playing');
            btnElement.innerHTML = '<i class="fas fa-volume-up"></i>';
        };
        audio.play();
    } catch (err) {
        console.error(err);
        btnElement.classList.remove('loading');
        btnElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
    }
}

// ===== CHAT HELPER =====
// Uses DOMPurify to prevent XSS
function addMsg(container, role, text) {
    const d = document.createElement('div');
    d.className = `chat-msg ${role}`;
    let formatted = text;

    if (role === 'bot') {
        formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
    }

    // XSS PROTECTION: Sanitize all outputs before setting innerHTML
    const cleanHtml = DOMPurify.sanitize(formatted);
    d.innerHTML = `<div class="chat-bubble">${cleanHtml}</div>`;

    if (role === 'bot' && text !== 'Thinking...' && text !== 'Updating recipe...' && !text.includes('Error:')) {
        const btnWrap = document.createElement('div');
        btnWrap.style.cssText = 'display:flex;gap:4px;margin-top:4px;';

        const ttsBtn = document.createElement('button');
        ttsBtn.className = 'tts-btn';
        ttsBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        ttsBtn.title = 'Play/Pause';
        ttsBtn.onclick = () => playTTS(text, ttsBtn);

        const resetBtn = document.createElement('button');
        resetBtn.className = 'tts-btn';
        resetBtn.innerHTML = '<i class="fas fa-redo"></i>';
        resetBtn.title = 'Restart';
        resetBtn.onclick = () => {
            if (ttsBtn.audioObj) {
                ttsBtn.audioObj.currentTime = 0;
                if (ttsBtn.audioObj.paused) ttsBtn.audioObj.play();
            } else {
                ttsBtn.click();
            }
        };

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-resp-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.title = 'Copy';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(text.replace(/<[^>]*>?/gm, '')).then(() => {
                if (window.showToast) window.showToast('Copied!');
            });
        };

        btnWrap.append(ttsBtn, resetBtn, copyBtn);
        d.querySelector('.chat-bubble').appendChild(btnWrap);
    }

    container.appendChild(d);
    container.scrollTop = container.scrollHeight;
    return d;
}

function addTyping(container) {
    const d = document.createElement('div');
    d.className = 'chat-msg bot';
    d.innerHTML = '<div class="chat-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
    container.appendChild(d);
    container.scrollTop = container.scrollHeight;
    return d;
}

// ===== BOT 1: RECIPE EDITOR =====
const customToggle = document.getElementById('chat-toggle-custom');
const customWindow = document.getElementById('chat-window-custom');
const customClose = document.getElementById('chat-close-custom');
const customClear = document.getElementById('chat-clear-custom');
const customMsgs = document.getElementById('chat-messages-custom');
const customInput = document.getElementById('chat-input-custom');
const customSend = document.getElementById('chat-send-custom');
let customOpen = false, customHistory = [];

function getCustomSystemPrompt() {
    const currentRecipeId = window.currentRecipeId;
    const currentRecipe = currentRecipeId ? (window.ORIGINAL_RECIPES.find(r => r.id === currentRecipeId) || null) : null;
    const edited = currentRecipeId ? window.editedRecipes[currentRecipeId] : null;
    const recipeCtx = currentRecipe ? JSON.stringify({ ...currentRecipe, ...(edited || {}) }) : 'No recipe currently open. Ask the user to open a recipe first.';

    return `You are the "Recipe Customization Assistant". Your job is to UPDATE the recipe currently being viewed.
When the user requests changes, output a JSON block wrapped in <<<UPDATE_RECIPE and >>> markers.
Only include the fields you are changing. Keep HTML formatting in instructions (<strong> tags, <br> tags, etc).

CRITICAL MATHEMATICAL INSTRUCTION:
LLMs often make math errors. If the user asks to change the serving size, you MUST use a "think step-by-step" approach BEFORE outputting the JSON block.
1. Write down the Original Serving Size.
2. Write down the New Serving Size.
3. Calculate the exact Ratio = (New Serving Size / Original Serving Size).
4. For EVERY SINGLE INGREDIENT, write the exact mathematical equation: "Original Amount * Ratio = Exact Amount". Convert fractions to decimals to do the math.
5. ROUND the newly calculated amounts to the CLOSEST USABLE COOKING MEASURE (e.g., 1/4, 1/3, 1/2, 2/3, 3/4) or whole integers. Do NOT output complex decimals like 0.33, 2.77, etc. Write "2 3/4 cups" or "1/3 tsp" instead. Use whole numbers for eggs.
Only after you have written out this math scratchpad should you output the <<<UPDATE_RECIPE block.

Example output format:
<your step-by-step math scratchpad goes here>
<<<UPDATE_RECIPE
{ "id": "${currentRecipeId || 'RECIPE_ID'}", "meta": ["15m Prep", "20m Cook", "4 Servings"], "ing": ["new ingredient 1", "new ingredient 2"], "ins": ["<strong>1. Step Title</strong><br>Step details..."], "intro": "Updated intro text", "outcome": "Updated outcome" }
>>>

DO NOT output any conversational text addressing the user. JUST your math scratchpad, followed by the JSON block.
CURRENT RECIPE DATA: ${recipeCtx}`;
}

if (customToggle) customToggle.addEventListener('click', () => { customOpen = !customOpen; customWindow.classList.toggle('open', customOpen); });
if (customClose) customClose.addEventListener('click', () => { customOpen = false; customWindow.classList.remove('open'); });
if (customClear) customClear.addEventListener('click', () => { customHistory = []; customMsgs.innerHTML = '<div class="chat-msg bot"><div class="chat-bubble">Chat cleared. How can I help?</div></div>'; });

async function sendCustom() {
    const txt = customInput.value.trim(); if (!txt) return;

    // User intent sanitized as well
    const safeTxt = DOMPurify.sanitize(txt);
    addMsg(customMsgs, 'user', safeTxt);
    customInput.value = '';
    customHistory.push({ role: 'user', content: safeTxt });

    const typing = addTyping(customMsgs);
    try {
        const res = await fetch(OPENAI_PROXY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [{ role: 'system', content: getCustomSystemPrompt() }, ...customHistory],
                max_tokens: 800
            })
        });

        if (!res.ok) {
            const e = await res.json().catch(() => ({}));
            throw new Error(e.error || `API Error: ${res.status}`);
        }

        const data = await res.json();
        if (typing) typing.remove();

        const reply = data.choices[0].message.content;

        // Handle recipe update
        const updateMatch = reply.match(/<<<UPDATE_RECIPE\s*([\s\S]*?)>>>/);
        if (updateMatch) {
            addMsg(customMsgs, 'bot', 'Edited the recipe ✨');
            customHistory.push({ role: 'assistant', content: reply });
            try {
                const update = JSON.parse(updateMatch[1]);
                const targetId = update.id || window.currentRecipeId;
                const orig = window.ORIGINAL_RECIPES.find(r => r.id === targetId);
                if (orig) {
                    window.editedRecipes[targetId] = window.editedRecipes[targetId] || {};
                    const edits = window.editedRecipes[targetId];
                    if (update.ing) edits.ing = update.ing.map(i => DOMPurify.sanitize(i));
                    if (update.ins) edits.ins = update.ins.map(i => DOMPurify.sanitize(i));
                    if (update.intro) edits.intro = DOMPurify.sanitize(update.intro);
                    if (update.outcome) edits.outcome = DOMPurify.sanitize(update.outcome);
                    if (update.meta) edits.meta = update.meta.map(i => DOMPurify.sanitize(i));

                    if (window.currentRecipeId && window.openDetail) {
                        window.openDetail(window.currentRecipeId, false);
                    }
                    if (window.showToast) window.showToast('Recipe updated! 💾 Save to keep your changes');
                    if (window.renderGrid) window.renderGrid();
                }
            } catch (e) { console.error('Parse error', e); }
        } else {
            addMsg(customMsgs, 'bot', reply);
            customHistory.push({ role: 'assistant', content: reply });
        }
    } catch (err) {
        if (typing) typing.remove();
        addMsg(customMsgs, 'bot', '⚠️ <b>Error:</b> ' + DOMPurify.sanitize(err.message));
    }
}

if (customSend) customSend.addEventListener('click', sendCustom);
if (customInput) customInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendCustom(); });

// ===== BOT 2: SOUS-CHEF =====
const mainToggle = document.getElementById('chat-toggle-main');
const mainWindow = document.getElementById('chat-window-main');
const mainClose = document.getElementById('chat-close-main');
const mainClear = document.getElementById('chat-clear-main');
const mainMsgs = document.getElementById('chat-messages-main');
const mainInput = document.getElementById('chat-input-main');
const mainSend = document.getElementById('chat-send-main');
let mainOpen = false, mainHistory = [];

function getMainSystemPrompt() {
    const titles = window.ORIGINAL_RECIPES.map(r => r.title).join(', ');
    const strictCtx = JSON.stringify(window.ORIGINAL_RECIPES);
    return `You are Aabaan's Sous-Chef. Answer general cooking questions based on the ${window.ORIGINAL_RECIPES.length} recipes in the book.
Titles: ${titles}.
Full Data Context: ${strictCtx}`;
}

if (mainToggle) mainToggle.addEventListener('click', () => { mainOpen = !mainOpen; mainWindow.classList.toggle('open', mainOpen); });
if (mainClose) mainClose.addEventListener('click', () => { mainOpen = false; mainWindow.classList.remove('open'); });
if (mainClear) mainClear.addEventListener('click', () => { mainHistory = []; mainMsgs.innerHTML = '<div class="chat-msg bot"><div class="chat-bubble">Chat cleared. Ask me anything!</div></div>'; });

async function sendMain() {
    const txt = mainInput.value.trim(); if (!txt) return;

    // Sanitize user intent
    const safeTxt = DOMPurify.sanitize(txt);
    addMsg(mainMsgs, 'user', safeTxt);
    mainInput.value = '';
    mainHistory.push({ role: 'user', content: safeTxt });

    const typing = addTyping(mainMsgs);
    try {
        const res = await fetch(OPENAI_PROXY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [{ role: 'system', content: getMainSystemPrompt() }, ...mainHistory],
                max_tokens: 300
            })
        });

        if (!res.ok) {
            const e = await res.json().catch(() => ({}));
            throw new Error(e.error || `API Error: ${res.status}`);
        }
        const data = await res.json();
        if (typing) typing.remove();

        const reply = data.choices[0].message.content;
        addMsg(mainMsgs, 'bot', reply);
        mainHistory.push({ role: 'assistant', content: reply });
    } catch (err) {
        if (typing) typing.remove();
        addMsg(mainMsgs, 'bot', '⚠️ <b>Error:</b> ' + DOMPurify.sanitize(err.message));
    }
}
if (mainSend) mainSend.addEventListener('click', sendMain);
if (mainInput) mainInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMain(); });

// Init Mic Buttons
document.addEventListener('DOMContentLoaded', () => {
    setupVoice('mic-btn-custom', 'chat-input-custom');
    setupVoice('mic-btn-main', 'chat-input-main');
});
