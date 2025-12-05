// 1. Dynamic Greeting based on your time
function setGreeting() {
    const greetingElement = document.getElementById('dynamic-greeting');
    const now = new Date();
    const hour = now.getHours();
    let message;

    if (hour < 12) {
        message = "Good Morning, Justin! ☀️";
    } else if (hour < 18) {
        message = "Good Afternoon, Justin! 🌊";
    } else {
        message = "Good Evening, Justin! 🌙";
    }

    if (greetingElement) {
        greetingElement.textContent = message;
    }
}

// 2. Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-btn');
    
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Day Mode";
    } else {
        btn.textContent = "🌙 Night Mode";
    }
}

// Run greeting on load
window.onload = setGreeting;