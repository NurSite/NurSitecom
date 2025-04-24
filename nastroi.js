const label = document.getElementById("theme-label");
const saved = localStorage.getItem("theme") || "system";

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--bg", "#111");
    document.documentElement.style.setProperty("--text", "#fff");
    label.textContent = "Тёмная";
  } else if (theme === "light") {
    document.documentElement.style.setProperty("--bg", "#fff");
    document.documentElement.style.setProperty("--text", "#000");
    label.textContent = "Светлая";
  } else {
    document.documentElement.style.removeProperty("--bg");
    document.documentElement.style.removeProperty("--text");
    label.textContent = "Системная";
  }
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  let current = localStorage.getItem("theme") || "system";
  let next = current === "system" ? "light" : current === "light" ? "dark" : "system";
  applyTheme(next);
}

applyTheme(saved);