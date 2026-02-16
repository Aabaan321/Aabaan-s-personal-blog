/* ═══════════════════════════════════════════════════════
   AABAAN — PREMIUM PORTFOLIO ENGINE
   Particles · Cursor · Typing · Counters · Tilt · Parallax · Chatbot
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ──────────────────────────────────────
       1. CUSTOM CURSOR GLOW
       ────────────────────────────────────── */
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    document.body.appendChild(cursorGlow);

    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();


    /* ──────────────────────────────────────
       2. PARTICLE CONSTELLATION BACKGROUND
       ────────────────────────────────────── */
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height, particles;
        const PARTICLE_COUNT = 80;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    r: Math.random() * 2 + 0.5,
                    o: Math.random() * 0.35 + 0.1,
                    hue: Math.random() > 0.5 ? 245 : 280
                });
            }
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Mouse repulsion effect
                const dx2 = p.x - mouseX;
                const dy2 = p.y - mouseY + window.scrollY;
                const md = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                if (md < 150) {
                    p.x += (dx2 / md) * 1.5;
                    p.y += (dy2 / md) * 1.5;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.o})`;
                ctx.fill();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 130)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawParticles);
        }

        resize();
        createParticles();
        drawParticles();
        window.addEventListener('resize', () => { resize(); createParticles(); });
    }


    /* ──────────────────────────────────────
       3. HERO TEXT TYPING EFFECT
       ────────────────────────────────────── */
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        const text = heroDesc.textContent;
        heroDesc.textContent = '';
        heroDesc.style.opacity = '1';
        let charIndex = 0;

        function typeText() {
            if (charIndex < text.length) {
                heroDesc.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 18);
            }
        }

        // Start typing after hero entrance animation
        setTimeout(typeText, 800);
    }


    /* ──────────────────────────────────────
       4. NAVBAR - STICKY + ACTIVE HIGHLIGHT
       ────────────────────────────────────── */
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function onScroll() {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }

        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 200;
            if (window.scrollY >= top) current = sec.getAttribute('id');
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();


    /* ──────────────────────────────────────
       5. MOBILE MENU
       ────────────────────────────────────── */
    const navToggle = document.getElementById('nav-toggle');
    const navLinksEl = document.getElementById('nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinksEl.classList.toggle('open');
            const icon = navToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });

        navLinksEl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksEl.classList.remove('open');
                const icon = navToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            });
        });
    }


    /* ──────────────────────────────────────
       6. SCROLL REVEAL (Staggered)
       ────────────────────────────────────── */
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));


    /* ──────────────────────────────────────
       7. ANIMATED COUNTERS
       ────────────────────────────────────── */
    const counters = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const suffix = el.getAttribute('data-suffix') || '';
                if (isNaN(target)) return;

                let current = 0;
                const step = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current + suffix;
                }, 25);

                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));


    /* ──────────────────────────────────────
       8. 3D CARD TILT EFFECT
       ────────────────────────────────────── */
    const tiltCards = document.querySelectorAll('.project-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

            // Moving shine effect
            const shine = card.querySelector('.card-shine');
            if (shine) {
                shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(108,99,255,0.15), transparent 60%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
            const shine = card.querySelector('.card-shine');
            if (shine) shine.style.background = 'transparent';
        });
    });


    /* ──────────────────────────────────────
       9. SKILL CHIPS - MAGNETIC HOVER
       ────────────────────────────────────── */
    document.querySelectorAll('.skill-chip').forEach(chip => {
        chip.addEventListener('mousemove', (e) => {
            const rect = chip.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            chip.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        chip.addEventListener('mouseleave', () => {
            chip.style.transform = 'translate(0, 0)';
        });
    });


    /* ──────────────────────────────────────
       10. PARALLAX SCROLL SECTIONS
       ────────────────────────────────────── */
    const parallaxEls = document.querySelectorAll('.section-title, .hero-content');

    function handleParallax() {
        parallaxEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            const speed = 0.03;
            const yPos = rect.top * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    }

    window.addEventListener('scroll', handleParallax, { passive: true });


    /* ──────────────────────────────────────
       11. TIMELINE EXPAND ON CLICK
       ────────────────────────────────────── */
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.addEventListener('click', () => {
            const expanded = card.classList.contains('expanded');
            // Close all first
            document.querySelectorAll('.timeline-card.expanded').forEach(c => c.classList.remove('expanded'));
            if (!expanded) card.classList.add('expanded');
        });
    });


    /* ──────────────────────────────────────
       12. MODAL SYSTEM
       ────────────────────────────────────── */
    const modalOverlay = document.getElementById('modal-overlay');
    const modalInner = document.getElementById('modal-inner');
    const modalClose = document.getElementById('modal-close');

    const modalData = {
        'modal-ai': {
            title: 'AI & Robotics — NeuroforgeAI',
            body: `<p>As the founder of <strong>NeuroforgeAI</strong>, I've built a suite of AI tools:</p>
<br>
<p><strong>🎤 Human-Like Speaking AI</strong> — Real-time voice synthesis with natural emotion.</p>
<p><strong>💬 Chat AI Assistant</strong> — Multi-purpose chatbot for complex queries.</p>
<p><strong>🖼 AI Image Generator</strong> — Text-to-image across 5 fine-tuned models.</p>
<p><strong>📸 Image Analyzer</strong> — Visual analysis, text extraction, emotion recognition.</p>
<p><strong>🤖 Robotics Prototype</strong> — Custom robot with motion sensors and decision AI.</p>
<br>
<p>Won <strong>1st Place</strong> at the Local Science Fair. Over <strong>1,000+</strong> interactions processed.</p>
<p style="margin-top:1rem"><a href="https://neuroforgai.online/chat" target="_blank" style="color:#8B83FF;font-weight:600">🔗 Visit NeuroforgeAI →</a></p>
<div class="project-tags" style="margin-top:1.5rem"><span>Voice AI</span><span>NLP</span><span>Computer Vision</span><span>Robotics</span><span>10+ Tools</span></div>`
        },
        'modal-gaming': {
            title: 'Gaming Universe',
            body: `<p><strong>God of War Ragnarok</strong> — 103 hours, 100% complete, Platinum Trophy.</p>
<p><strong>Call of Duty</strong> — 350+ hours, Division 1. 1st place tournament win.</p>
<p><strong>The Witcher 3</strong> — 300+ hours, 100+ wins.</p>
<br>
<p><strong>Battle Station:</strong></p>
<p>🖥 RTX 3080 · Ryzen 9 5900X · 32GB RAM · 1TB NVMe + 2TB HDD</p>
<p>🖥 27" 4K 144Hz IPS HDR · NZXT Kraken Z73 · SteelSeries Arctis Pro</p>
<div class="project-tags" style="margin-top:1.5rem"><span>Competitive</span><span>FPS</span><span>RPG</span><span>Custom PC</span></div>`
        },
        'modal-sports': {
            title: 'Sports & Fitness',
            body: `<p><strong>🥊 Boxing</strong> — Mental toughness and cardiovascular health.</p>
<p><strong>🏊 Swimming</strong> — 1000m freestyle under 20 min (2023).</p>
<p><strong>🏀 Basketball</strong> — Tournament winner (2024).</p>
<br>
<p><em>"Progressive overload, mental discipline, and the meditative flow of physical activity."</em></p>
<div class="project-tags" style="margin-top:1.5rem"><span>5+ Years</span><span>3 Sports</span><span>6hrs/week</span></div>`
        },
        'modal-auto': {
            title: 'Automotive Passion',
            body: `<p><strong>Dream Events:</strong></p>
<p>🏎️ Monaco Grand Prix · 🏁 Goodwood · 🏍️ Isle of Man TT</p>
<br>
<p><strong>Dream Machines:</strong></p>
<p>🔥 <strong>Lamborghini Aventador SVJ</strong> — 770 HP · 0-60 in 2.8s</p>
<p>🔥 <strong>Ferrari SF90 Stradale</strong> — 986 HP · 0-60 in 2.5s</p>
<p>🔥 <strong>Ducati Panigale V4</strong> — 214 HP · 186 mph</p>
<p>🔥 <strong>Kawasaki Ninja H2R</strong> — 310 HP · 240 mph</p>
<div class="project-tags" style="margin-top:1.5rem"><span>Supercars</span><span>Motorcycles</span><span>Motorsport</span></div>`
        }
    };

    document.querySelectorAll('[data-modal]').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.project-link')) return;
            const key = card.dataset.modal;
            if (modalData[key]) {
                modalInner.innerHTML = `<h2>${modalData[key].title}</h2>${modalData[key].body}`;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });


    /* ──────────────────────────────────────
       13. CV PREVIEW
       ────────────────────────────────────── */
    const btnPreview = document.getElementById('btn-preview-cv');
    const btnDownload = document.getElementById('btn-download-cv');

    if (btnPreview) {
        btnPreview.addEventListener('click', () => {
            modalInner.innerHTML = `
                <h2>CV Preview</h2>
                <p><strong>Aabaan</strong> — AI Developer · Culinary Artist · Adventure Seeker</p>
                <br>
                <p><strong>Skills:</strong> AI & Robotics, Web Development, Culinary Arts, Photography, Fitness</p>
                <p><strong>Projects:</strong> NeuroforgeAI (Founder), 5 Browser Games, Custom Robot</p>
                <p><strong>Achievements:</strong> 1st Place Science Fair, CoD Division 1, Platinum God of War</p>
                <p><strong>Education:</strong> Cambridge Cooking Certificate, AI & Robotics path (2026+)</p>
                <br>
                <p><strong>Contact:</strong> aabaanrg@gmail.com · +971 551212310</p>
            `;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            btnDownload.style.transform = 'scale(0.95)';
            setTimeout(() => { btnDownload.style.transform = ''; }, 150);
        });
    }


    /* ──────────────────────────────────────
       14. SMOOTH SCROLL
       ────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    /* ──────────────────────────────────────
       15. PASSION GALLERY — IMAGE TILT
       ────────────────────────────────────── */
    document.querySelectorAll('.passion-gallery-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const tiltX = (y - 0.5) * -10;
            const tiltY = (x - 0.5) * 10;
            item.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
        });
    });


    /* ══════════════════════════════════════════════════════
       16. AI CHATBOT (Self-Injecting Widget) — Powered by GPT-4o
       ══════════════════════════════════════════════════════ */
    const OPENAI_API_KEY = '%%OPENAI_API_KEY%%';
    const OPENAI_MODEL = 'gpt-4o-mini';
    const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';

    // 1. Inject Chatbot HTML if not present
    if (!document.getElementById('chatbot')) {
        const chatbotContainer = document.createElement('div');
        chatbotContainer.id = 'chatbot';
        chatbotContainer.innerHTML = `
            <button class="chatbot-toggle" id="chatbot-toggle" aria-label="Open Chat">
                <i class="fas fa-comment-dots"></i>
                <span class="chatbot-pulse"></span>
            </button>
            <div class="chatbot-window" id="chatbot-window">
                <div class="chatbot-header">
                    <div class="chatbot-header-info">
                        <div class="chatbot-avatar"><i class="fas fa-robot"></i></div>
                        <div>
                            <h4>Aabaan's AI Assistant</h4>
                            <span class="chatbot-status"><span class="status-dot"></span> For Your Assistance</span>
                        </div>
                    </div>
                    <button class="chatbot-close" id="chatbot-close"><i class="fas fa-xmark"></i></button>
                </div>
                <div class="chatbot-messages" id="chatbot-messages">
                    <div class="chat-msg bot">
                        <div class="chat-bubble">Hey! 👋 I'm Aabaan's AI assistant. Ask me anything about his projects, skills, or journey!</div>
                    </div>
                </div>
                <div class="chatbot-input-area">
                    <input type="text" id="chatbot-input" placeholder="Ask me anything..." autocomplete="off">
                    <button id="chatbot-send"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>`;
        document.body.appendChild(chatbotContainer);
    }

    const chatToggle = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chatbot-window');
    const chatClose = document.getElementById('chatbot-close');
    const chatMessages = document.getElementById('chatbot-messages');
    const chatInput = document.getElementById('chatbot-input');
    const chatSend = document.getElementById('chatbot-send');

    let chatOpen = false;
    let isSending = false;
    const conversationHistory = [];

    const SYSTEM_PROMPT = `You are Aabaan's personal AI assistant embedded in his premium portfolio website. Be friendly, concise, and enthusiastic. Match the futuristic/premium vibe of the site.

ABOUT AABAAN:
- AI Developer, Culinary Artist & Adventure Seeker
- Email: aabaanrg@gmail.com | Phone: +971 551212310
- GitHub: github.com/aabaan321
- Founded NeuroforgeAI (neuroforgai.online/chat) — platform with Speaking AI, Chat AI, Image Generator, Image Analyzer, Robotics Prototype
- Won 1st Place at Local Science Fair for human-like AI
- Built 10+ AI tools, 5 browser games, custom robot

GAMING: God of War Ragnarok (103h, Platinum), CoD (350h, Div 1, tournament winner), Witcher 3 (300h). PC: RTX 3080, Ryzen 9 5900X, 32GB RAM, 27" 4K 144Hz.
SPORTS: 5+ years — Boxing, Swimming (1000m <20min), Basketball (tournament winner 2024)
CULINARY: 9+ years cooking, Cambridge Certificate. Specialties: Beef Wellington, Alfredo, Panna Cotta. Dream: AI-powered restaurant.
AUTOMOTIVE: Dream cars: Lambo Aventador SVJ, Ferrari SF90. Bikes: Ducati Panigale V4, Kawasaki H2R. Events: Monaco GP, Goodwood, Isle of Man TT.

RULES: Keep responses 2-4 sentences. Use emojis sparingly. If unsure, say so honestly. Suggest portfolio sections when relevant.`;

    // Toggle chat
    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatOpen = !chatOpen;
            chatWindow.classList.toggle('open', chatOpen);
            chatToggle.querySelector('i').className = chatOpen ? 'fas fa-xmark' : 'fas fa-comment-dots';
            if (chatOpen) {
                setTimeout(() => chatInput && chatInput.focus(), 350);
            }
        });
    }

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatOpen = false;
            chatWindow.classList.remove('open');
            chatToggle.querySelector('i').className = 'fas fa-comment-dots';
        });
    }

    // Send message (OpenAI Version)
    async function sendMessage() {
        const msg = chatInput.value.trim();
        if (!msg || isSending) return;

        isSending = true;
        chatSend.disabled = true;
        chatSend.style.opacity = '0.5';

        // User bubble
        appendMessage('user', msg);
        chatInput.value = '';

        // Add to history (OpenAI format)
        conversationHistory.push({ role: 'user', content: msg });

        // Typing indicator
        const typingEl = showTyping();

        try {
            const response = await callOpenAI();
            typingEl.remove();
            appendMessage('bot', response);
            conversationHistory.push({ role: 'assistant', content: response });
        } catch (err) {
            typingEl.remove();
            console.error('OpenAI Error:', err);

            let errorMsg = `Oops! Something went wrong. (${err.message}) Please try again. 🔄`;
            if (err.message.includes('401')) {
                errorMsg = "Invalid API Key. Please check the key configuration. 🔑";
            } else if (err.message.includes('429')) {
                errorMsg = "Quota exceeded (OpenAI). check your plan. 💳";
            } else if (err.message.includes('Failed to fetch')) {
                errorMsg = "Can't reach server. Check internet connection. 🌐";
            }
            appendMessage('bot', errorMsg);
        } finally {
            isSending = false;
            if (chatSend) {
                chatSend.disabled = false;
                chatSend.style.opacity = '1';
            }
        }
    }

    if (chatSend) chatSend.addEventListener('click', sendMessage);
    if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    function appendMessage(role, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-msg ${role}`;
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';

        // Simple markdown-like formatting for bot messages
        if (role === 'bot') {
            let formatted = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n/g, '<br>');
            bubble.innerHTML = formatted;
        } else {
            bubble.textContent = text;
        }

        msgDiv.appendChild(bubble);
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-msg bot';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `<div class="chat-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return typingDiv;
    }

    async function callOpenAI() {
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory
        ];

        const body = {
            model: OPENAI_MODEL,
            messages: messages,
            temperature: 0.7,
            max_tokens: 400
        };

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        try {
            const res = await fetch(OPENAI_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                },
                body: JSON.stringify(body),
                signal: controller.signal
            });

            clearTimeout(timeout);

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(`API error: ${res.status} — ${errData.error?.message || 'Unknown error'}`);
            }

            const data = await res.json();

            if (data.choices?.[0]?.message?.content) {
                return data.choices[0].message.content;
            }

            throw new Error('Empty response from OpenAI');
        } catch (err) {
            clearTimeout(timeout);
            if (err.name === 'AbortError') {
                throw new Error('Request timed out after 15 seconds');
            }
            throw err;
        }
    }

    // Auto-open hint after 5 seconds
    setTimeout(() => {
        if (!chatOpen && chatToggle) {
            chatToggle.classList.add('hint-bounce');
            setTimeout(() => chatToggle.classList.remove('hint-bounce'), 2000);
        }
    }, 5000);

});
