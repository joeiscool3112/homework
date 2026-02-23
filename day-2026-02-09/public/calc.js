const form = document.getElementById("calcForm");
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const opSelect = document.getElementById("op");
const output = document.getElementById("output");
const btnReset = document.getElementById("btnReset");

function showMessage(text, type) {
  output.textContent = text;
  output.className = "msg " + (type === "error" ? "error" : "ok");
  output.hidden = false;
}

function hideMessage() {
  output.hidden = true;
  output.textContent = "";
  output.className = "msg";
}

function parseNumber(value) {
  const v = String(value ?? "").trim();
  if (v === "") return { ok: false, num: null };
  const n = Number(v);
  return { ok: true, num: n };
}

function calculate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: return NaN;
  }
}

function formatNumber(n) {
  if (Number.isInteger(n)) return String(n);
  const fixed = Number(n.toFixed(10));
  return String(fixed).replace(/\.?0+$/, "");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hideMessage();

  const pa = parseNumber(inputA.value);
  const pb = parseNumber(inputB.value);
  const op = opSelect.value;

  if (!pa.ok || !pb.ok) {
    showMessage("not enough numbers", "error");
    return;
  }

  if (op === "/" && pb.num === 0) {
    showMessage("can divide 0", "error");
    return;
  }

  const result = calculate(pa.num, pb.num, op);


  showMessage(`${formatNumber(result)}`, "ok");
});

btnReset.addEventListener("click", () => {
  form.reset();
  hideMessage();
  inputA.focus();
});