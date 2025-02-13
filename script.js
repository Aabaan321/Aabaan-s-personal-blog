document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Toggle settings panel
    const settingsIcon = document.getElementById("settings-icon");
    const settingsPanel = document.getElementById("settings-panel");

    settingsIcon.addEventListener("click", function () {
        settingsPanel.classList.toggle("hidden");
    });

    // Theme switch
    const themeSwitch = document.getElementById("theme-switch");
    themeSwitch.addEventListener("change", function () {
        document.body.style.background = themeSwitch.checked ? "#ffffff" : "#121212";
        document.body.style.color = themeSwitch.checked ? "#000000" : "#ffffff";
    });

    // Font size change
    const fontSizeSelect = document.getElementById("font-size");
    fontSizeSelect.addEventListener("change", function () {
        document.body.style.fontSize = fontSizeSelect.value;
    });

    // Theme color change
    const themeColor = document.getElementById("theme-color");
    themeColor.addEventListener("input", function () {
        document.documentElement.style.setProperty("--theme-color", themeColor.value);
    });

    // Save settings
    document.getElementById("save-settings").addEventListener("click", function () {
        alert("Settings saved!");
        settingsPanel.classList.add("hidden");
    });
});
