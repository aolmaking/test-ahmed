document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const nameInput = document.getElementById("name");

  startBtn.addEventListener("click", () => {
    const playerName = nameInput.value.trim();
    if (playerName) {
      localStorage.setItem("playerName", playerName);
      window.location.href = "main.html";
    } else {
      Swal.fire({
      title: "there is no name?",
      text: "please enter your name",
      icon: "question"
});
    }
  });
});
