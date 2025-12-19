document.addEventListener("DOMContentLoaded", function () {

    const quotes = [
        "I was doing fine, then suddenly you crossed my mind.",
        "Healing isn’t linear — some nights still hurt.",
        "I miss you.",
        "Letting go is hard when the memories still feel alive.",
        "I moved on… but some feelings forgot to follow.",
        "I think a part of me will always wait for you."
    ];

    let quoteIndex = 0;
    let charIndex = 0;

    const typingEl = document.getElementById("typing");
    const button = document.getElementById("nextBtn");

    function typeEffect() {
        if (charIndex < quotes[quoteIndex].length) {
            typingEl.textContent += quotes[quoteIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 55);
        }
    }

    function nextQuote() {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        charIndex = 0;
        typingEl.textContent = "";
        typeEffect();
    }

    // tombol aman tanpa inline onclick
    if (button) {
        button.addEventListener("click", nextQuote);
    }

    typeEffect();
});
