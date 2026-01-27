
function switchTab(tabId, btn) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.add("hidden");
  });
  document.getElementById(tabId).classList.remove("hidden");

  document.querySelectorAll(".nav-link").forEach(b => {
    b.classList.remove("active");
  });
  btn.classList.add("active");
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function selectProgram(card) {
  document.querySelectorAll(".interactive").forEach(c => {
    c.classList.remove("selected");
  });
  card.classList.add("selected");

  document.getElementById("feedback").innerText =
    `You selected: ${card.querySelector("h3").innerText}`;
}
