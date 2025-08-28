// Functionalities for click the heart icon to increase the count

const heartCountEl = document.getElementById("heart-count");

function increaseHeartCount(heartCountEl, buttonSelector) {
  const allHeartButtons = document.querySelectorAll(buttonSelector);

  for (const btn of allHeartButtons) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      let current = parseInt(heartCountEl.innerText) || 0;

      heartCountEl.innerText = current + 1;

      // --- change icon style ---
      const icon = btn.querySelector("i"); // find <i> inside this button
      if (icon && icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      }
    });
  }
}
increaseHeartCount(heartCountEl, ".btn-heart-click");
