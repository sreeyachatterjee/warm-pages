const questions = [
    "What was your first thought when we met? 💭",
    "What’s your favorite memory of us? 🥰",
    "What do you love the most about me? ❤️",
    "If we traveled anywhere together, where would it be? ✈️",
    "What song reminds you of us? 🎵",
    "What’s one thing you want us to do together this year? 💕",
    "Do you know how much I love you? (Hint: A LOT 😘)"
];

function newQuestion() {
    const random = Math.floor(Math.random() * questions.length);
    document.getElementById("question").innerText = questions[random];
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}