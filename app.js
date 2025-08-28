/*****************************
 * PART 1 — MANUAL (for learning)
 * This whole part is commented out.
 * It shows the logic step by step and very explicitly.
 ******************************/

/*

// STEP 1: get the navbar heart count <span id="heart-count">
var navHeartCountSpan = document.getElementById("heart-count");

// STEP 2: find ALL the little heart buttons inside each card
// (they have the attribute data-heart in your HTML)
var allHeartButtons = document.querySelectorAll("[data-heart]");

// STEP 3: read the current number in the navbar and make sure it's a number
var currentCount = parseInt(navHeartCountSpan.innerText);
if (isNaN(currentCount)) {
  currentCount = 0; // just in case
}

// STEP 4: MANUALLY add listeners one by one (long style)
// NOTE: this is just to show you how it works. We will NOT keep this running code.

var heartBtn1 = allHeartButtons[0];
heartBtn1.addEventListener("click", function () {
  // 4.1 increase number
  currentCount = currentCount + 1;

  // 4.2 update the navbar text
  navHeartCountSpan.innerText = currentCount;

  // 4.3 change the icon of THIS card to solid heart to show it's clicked
  var icon = heartBtn1.querySelector("i");
  if (icon) {
    // remove regular and add solid
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

// Repeat for each heart (this is why we don't like manual long code!)
// Only for learning purpose:

var heartBtn2 = allHeartButtons[1];
heartBtn2.addEventListener("click", function () {
  currentCount = currentCount + 1;
  navHeartCountSpan.innerText = currentCount;
  var icon = heartBtn2.querySelector("i");
  if (icon) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

var heartBtn3 = allHeartButtons[2];
heartBtn3.addEventListener("click", function () {
  currentCount = currentCount + 1;
  navHeartCountSpan.innerText = currentCount;
  var icon = heartBtn3.querySelector("i");
  if (icon) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

var heartBtn4 = allHeartButtons[3];
heartBtn4.addEventListener("click", function () {
  currentCount = currentCount + 1;
  navHeartCountSpan.innerText = currentCount;
  var icon = heartBtn4.querySelector("i");
  if (icon) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

var heartBtn5 = allHeartButtons[4];
heartBtn5.addEventListener("click", function () {
  currentCount = currentCount + 1;
  navHeartCountSpan.innerText = currentCount;
  var icon = heartBtn5.querySelector("i");
  if (icon) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

var heartBtn6 = allHeartButtons[5];
heartBtn6.addEventListener("click", function () {
  currentCount = currentCount + 1;
  navHeartCountSpan.innerText = currentCount;
  var icon = heartBtn6.querySelector("i");
  if (icon) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

var heartBtn7 = allHeartButtons[6];
heartBtn7.addEventListener("click", function () {
  currentCount = currentCount + 1;
  navHeartCountSpan.innerText = currentCount;
  var icon = heartBtn7.querySelector("i");
  if (icon) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

var heartBtn8 = allHeartButtons[7];
heartBtn8.addEventListener("click", function () {
  currentCount = currentCount + 1;
  navHeartCountSpan.innerText = currentCount;
  var icon = heartBtn8.querySelector("i");
  if (icon) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

var heartBtn9 = allHeartButtons[8];
heartBtn9.addEventListener("click", function () {
  currentCount = currentCount + 1;
  navHeartCountSpan.innerText = currentCount;
  var icon = heartBtn9.querySelector("i");
  if (icon) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

// You can see it works, but it's very long and repeated.
// Next we do the same thing with a tiny reusable function.

*/

/*****************************
 * PART 2 — REUSABLE (runs)
 * Same behavior, but short and clean.
 * Only vanilla JS. Uses your requested function name:heartIconClick()
 ******************************/

//heartIconClick = increases the number in the navbar heart badge by +1
function heartIconClick() {
  const navHeartCountSpan = document.getElementById("heart-count");
  const currentCount = parseInt(navHeartCountSpan.innerText);

  if (isNaN(currentCount)) {
    currentCount = 0;
  }

  const newCount = currentCount + 1;
  navHeartCountSpan.innerText = newCount;
}

// Find all card heart buttons (they have data-heart)
const heartButtons = document.querySelectorAll("[data-heart]");

// Attach click listeners using a simple for loop (no advanced stuff)
for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    // 1) increase navbar count using the reusable function
    heartIconClick();
  });
}
