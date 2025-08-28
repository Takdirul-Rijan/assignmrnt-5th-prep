// 1) Get the navbar counter element
const heartCountEl = document.getElementById("heart-count");

// 2) Find all heart buttons
const heartButtons = document.querySelectorAll(".btn-heart-click");

// 3) Attach click listeners
for (const btn of heartButtons) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // --- Increase the counter ---
    let current = parseInt(heartCountEl.innerText);
    if (isNaN(current)) current = 0;
    heartCountEl.innerText = current + 1;

    // --- Change icon style ---
    const icon = btn.querySelector("i"); // find <i> inside this button
    if (icon && icon.classList.contains("fa-regular")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    }
  });
}
