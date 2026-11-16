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
