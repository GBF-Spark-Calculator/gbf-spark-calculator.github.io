const crystals = document.getElementById("crystals");
const singles = document.getElementById("singles");
const tenPulls = document.getElementById("tenPulls");
const totalRolls = document.getElementById("totalRolls");
const remainingRolls = document.getElementById("remainingRolls");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const exportBtn = document.getElementById("exportBtn");
const progressBar = document.getElementById("progressBar");
const darkModeToggle = document.getElementById("darkModeToggle");

function calculateRolls() {
  const c = parseFloat(crystals.value) || 0;
  const s = parseInt(singles.value) || 0;
  const t = parseInt(tenPulls.value) || 0;

  const total = Math.floor(c / 300) + s + (t * 10);
  const left = Math.max(0, 300 - total);

  totalRolls.textContent = total;
  remainingRolls.textContent = left;

  const percent = Math.min(100, (total / 300) * 100);
  progressBar.style.width = percent + "%";

  localStorage.setItem("gbfInputs", JSON.stringify({ c, s, t }));
}

function resetFields() {
  crystals.value = "";
  singles.value = "";
  tenPulls.value = "";
  totalRolls.textContent = "0";
  remainingRolls.textContent = "300";
  progressBar.style.width = "0%";
  localStorage.removeItem("gbfInputs");
}

function exportResult() {
  const text = `Crystals: ${crystals.value}\nSingles: ${singles.value}\nTen-Pulls: ${tenPulls.value}\nTotal Rolls: ${totalRolls.textContent}\nRemaining to 300: ${remainingRolls.textContent}`;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "gbf_spark_calculator_result.txt";
  link.click();
}

function loadSavedInputs() {
  const saved = JSON.parse(localStorage.getItem("gbfInputs"));
  if (saved) {
    crystals.value = saved.c;
    singles.value = saved.s;
    tenPulls.value = saved.t;
    calculateRolls();
  }
}

calculateBtn.addEventListener("click", calculateRolls);
resetBtn.addEventListener("click", resetFields);
exportBtn.addEventListener("click", exportResult);
crystals.addEventListener("input", calculateRolls);
singles.addEventListener("input", calculateRolls);
tenPulls.addEventListener("input", calculateRolls);
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

window.addEventListener("DOMContentLoaded", () => {
  loadSavedInputs();
});