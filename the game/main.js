document.addEventListener("DOMContentLoaded", () => {
  const welcomeMessage = document.getElementById("welcomeMessage");
  const playerName = localStorage.getItem("playerName");

  if (playerName) {
    welcomeMessage.textContent = `Welcome, ${playerName}`;
  } else {
    welcomeMessage.textContent = "Welcome to the Game!";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".password-input");
  const confirmBtn = document.getElementById("confirmBtn");
  let currentIndex = 0;

  const passwords = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];

  function positionButton(input) {
    const rect = input.getBoundingClientRect();
    const containerRect = document.querySelector("#container").getBoundingClientRect();
    if (input==0){
      confirmBtn.style.marginTop = "25px";
    }
    confirmBtn.style.top = rect.top - containerRect.top + "px";
    confirmBtn.style.left = rect.right - containerRect.left + 10 + "px";
  }

  positionButton(inputs[currentIndex]);

  confirmBtn.addEventListener("click", () => {
    const input = inputs[currentIndex];
    const value = input.value.trim();

    if (value.toLowerCase() === passwords[currentIndex].toLowerCase()) {
      input.disabled = true;
      input.classList.add("doneInput");

      currentIndex++;
      if (currentIndex < inputs.length) {
        inputs[currentIndex].disabled = false;
        inputs[currentIndex].focus();
        positionButton(inputs[currentIndex]);
      } else {
        confirmBtn.style.display = "none";
        document.getElementById("winnerScreen").style.display = "flex";
      }
    } else {
      input.classList.add("error");
      setTimeout(() => input.classList.remove("error"), 500);
    }
  });

  const helpBtn = document.getElementById("helpBtn");
  const helpModal = document.getElementById("helpModal");
  const closeBtn = document.querySelector(".closeBtn");

  helpBtn.addEventListener("click", () => {
    helpModal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    helpModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === helpModal) {
      helpModal.style.display = "none";
    }
  });
});

function showWinnerScreen() {
  document.body.innerHTML = "";
  document.body.style.background = "green";
  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.display = "flex";
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";

  const h = document.createElement("h1");
  h.className = "winner-text";
  h.textContent = "WINNER";
  document.body.appendChild(h);
}
