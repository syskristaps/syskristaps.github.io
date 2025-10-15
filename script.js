// get our canvas and its drawing context
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// make canvas fill the entire screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アァカサタナハマヤャラワン0123457890ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// size of each character and how many columns fit across
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);

// an array that tracks the y-position of each column
const drops = Array(columns).fill(1);

// draw loop
function draw() {
    // fade the old frame to create a trailing effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // set text color + font
    ctx.fillStyle = "#00ff41";
    ctx.font = fontSize + "px monospace";

    // draw each column’s character
    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        // reset drop when it goes off screen
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    });
}

setInterval(draw, 133);

// adjust canvas size if window resizes
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
