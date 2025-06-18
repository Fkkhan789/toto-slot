const symbols = ["🍒", "💎", "7️⃣", "🍋", "🍉", "⭐"];

function spin() {
  const r1 = symbols[Math.floor(Math.random() * symbols.length)];
  const r2 = symbols[Math.floor(Math.random() * symbols.length)];
  const r3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("reel1").innerText = r1;
  document.getElementById("reel2").innerText = r2;
  document.getElementById("reel3").innerText = r3;

  const resultText = document.getElementById("result");

  if (r1 === r2 && r2 === r3) {
    resultText.innerText = "🎉 Jackpot! You Win!";
  } else {
    resultText.innerText = "😢 Try Again!";
  }
}