function calculate() {
  const crystals = parseFloat(document.getElementById("crystals").value) || 0;
  const tickets = parseInt(document.getElementById("tickets").value) || 0;
  const tenPulls = parseInt(document.getElementById("tenPulls").value) || 0;
  const extraRolls = parseInt(document.getElementById("extraRolls").value) || 0;

  const totalRolls = Math.floor(crystals / 300) + tickets + (tenPulls * 10) + extraRolls;
  document.getElementById("totalRolls").textContent = totalRolls;

  const percent = Math.min(100, (totalRolls / 300) * 100);
  document.getElementById("progressFill").style.width = percent + "%";
}

function exportResult() {
  const totalRolls = document.getElementById("totalRolls").textContent;
  const blob = new Blob(["Total Rolls: " + totalRolls], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "gbf_spark_result.txt";
  a.click();
}
