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
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

function updateThemeButton() {
  const isDark = document.body.classList.contains("dark-mode");
  if (!themeButton) return;
  themeButton.textContent = isDark ? "☀️ Habka iftiinka" : "🌙 Habka mugdiga";
  themeButton.setAttribute("aria-pressed", String(isDark));
}

updateThemeButton();

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("portfolio-theme", theme);
    updateThemeButton();
  });
}
