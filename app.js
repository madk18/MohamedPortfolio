const copyButton = document.querySelector("#copy-username");
const copyFeedback = document.querySelector("#copy-feedback");

if (copyButton && copyFeedback) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("@madk18");
      copyFeedback.textContent = "Username-ka waa la koobiyeeyay!";
    } catch {
      copyFeedback.textContent = "Fadlan gacanta ku koobiyeey: @madk18";
    }
  });
}

const themeButton = document.querySelector("#theme-toggle");
const THEME_KEY = "portfolio-theme";

function readSavedTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Dark mode still works for this visit if browser storage is blocked.
  }
}

if (readSavedTheme() === "dark") {
  document.body.classList.add("dark-mode");
}

function updateThemeButton() {
  if (!themeButton) return;
  const isDark = document.body.classList.contains("dark-mode");
  themeButton.textContent = isDark ? "☀️ Habka iftiinka" : "🌙 Habka mugdiga";
  themeButton.setAttribute("aria-pressed", String(isDark));
}

updateThemeButton();

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    saveTheme(isDark ? "dark" : "light");
    updateThemeButton();
  });
}
