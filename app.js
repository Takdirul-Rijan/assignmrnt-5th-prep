/* ===========================================================
   Emergency Service Directory — Vanilla JS
   -----------------------------------------------------------
   HOW THIS FILE IS ORGANIZED
   1) Small "state" object to keep counts in one place
   2) Helper (reusable) functions
   3) One setup function that attaches event listeners to all cards
   4) History "clear" button

   Tip: read top to bottom; every function has a short comment.
   =========================================================== */

/* -----------------------------
   1) APP STATE (in-memory only)
   ----------------------------- */
// We store the counters here so it's easy to update + read everywhere.
const state = {
  hearts: 0, // how many times user clicked any ♥ icon
  coins: 100, // starts with 100 as per requirement
  copies: 0, // how many times Copy was clicked
  history: [], // array of {service, number, time}
};

// Cache DOM elements we will update a lot (faster + cleaner)
const els = {
  heartCount: document.getElementById("heart-count"),
  coinCount: document.getElementById("coin-count"),
  copyCount: document.getElementById("copy-count"),
  historyList: document.getElementById("history-list"),
  clearHistory: document.getElementById("clear-history"),
  cardGrid: document.getElementById("card-grid"),
};

/* --------------------------------
   2) REUSABLE HELPER FUNCTIONS
   -------------------------------- */

/**
 * updateCounters() → write numbers from state to the navbar
 */
function updateCounters() {
  els.heartCount.textContent = state.hearts;
  els.coinCount.textContent = state.coins;
  els.copyCount.textContent = state.copies;
}

/**
 * copyToClipboard(text) → tries to copy using modern API,
 * falls back to a hidden <textarea> if needed.
 */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // Fallback for old browsers
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}

/**
 * formatCurrentTime() → returns the current local time
 * in a friendly format like "11:36:58 AM".
 */
function formatCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
}

/**
 * addHistoryItem(service, number) → pushes an item into state.history
 * and renders the visible list on the right panel.
 */
function addHistoryItem(service, number) {
  const time = formatCurrentTime();

  // Save to state (latest on top feels better)
  state.history.unshift({ service, number, time });

  // Re-render the <ul> content
  renderHistory();
}

/**
 * renderHistory() → draws all history items from state.history
 * into the <ul id="history-list">. Called after every change.
 */
function renderHistory() {
  // Remove everything
  els.historyList.innerHTML = "";

  // Add each item as a small card-like row
  state.history.forEach((item) => {
    const li = document.createElement("li");
    li.className = "p-3 rounded-lg bg-base-100 border";

    li.innerHTML = `
      <div class="flex items-start justify-between">
        <div class="text-sm">
          <div class="font-semibold">${item.service}</div>
          <div class="opacity-70 text-xs">${item.number}</div>
        </div>
        <div class="text-xs opacity-70">${item.time}</div>
      </div>
    `;
    els.historyList.appendChild(li);
  });
}

/**
 * handleHeartClick(btn) → increases heart counter and
 * toggles the icon style to give user feedback.
 */
function handleHeartClick(btn) {
  state.hearts += 1; // requirement: every click increases count
  updateCounters();

  // Visual feedback: switch from regular to solid heart
  const icon = btn.querySelector("i");
  icon.classList.remove("fa-regular");
  icon.classList.add("fa-solid", "text-rose-500");
}

/**
 * handleCopyClick(service, number) → copies the number,
 * shows an alert, and increases copy count.
 */
async function handleCopyClick(service, number) {
  await copyToClipboard(number);
  state.copies += 1;
  updateCounters();

  alert(`Copied ${service} number: ${number}`);
}

/**
 * handleCallClick(service, number) → validates coins,
 * shows an alert, deducts 20 coins, and adds to history (with time).
 */
function handleCallClick(service, number) {
  // Check if the user has enough coins
  if (state.coins < 20) {
    alert("Not enough coins to make a call. You need at least 20 coins.");
    return;
  }

  // Show call message (as per requirement)
  alert(`Calling ${service} — ${number}`);

  // Deduct 20 coins for each call
  state.coins -= 20;
  updateCounters();

  // Add to the Call History (JS will also show the current time)
  addHistoryItem(service, number);
}

/* -------------------------------------------------------
   3) SETUP INTERACTIONS FOR ALL CARDS (EVENT DELEGATION)
   -------------------------------------------------------
   Why event delegation?
   - We add ONE click listener on the grid wrapper instead of many.
   - It finds what was clicked: heart / copy / call button.
   - Cleaner and performs well.
-------------------------------------------------------- */
function setupCardInteractions() {
  // One listener for everything inside #card-grid
  els.cardGrid.addEventListener("click", (evt) => {
    const target = evt.target;

    // Find the closest card <article> (so we can read data-service/number)
    const card = target.closest("article[data-service][data-number]");
    if (!card) return;

    const service = card.getAttribute("data-service");
    const number = card.getAttribute("data-number");

    // 1) Heart icon?
    const heartBtn = target.closest("[data-heart]");
    if (heartBtn) {
      handleHeartClick(heartBtn);
      return;
    }

    // 2) Copy button?
    const copyBtn = target.closest("[data-action='copy']");
    if (copyBtn) {
      handleCopyClick(service, number);
      return;
    }

    // 3) Call button?
    const callBtn = target.closest("[data-action='call']");
    if (callBtn) {
      handleCallClick(service, number);
      return;
    }
  });
}

/* ----------------------------------
   4) CLEAR HISTORY BUTTON HANDLER
   ---------------------------------- */
function setupClearHistory() {
  els.clearHistory.addEventListener("click", () => {
    state.history = []; // reset array
    renderHistory(); // visually clear the list
  });
}

/* -----------------------------
   INIT: run once on page load
   ----------------------------- */
function init() {
  updateCounters(); // show initial 0/100/0
  setupCardInteractions();
  setupClearHistory();
}

init();
