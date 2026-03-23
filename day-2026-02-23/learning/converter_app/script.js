// --
function round2(n) {
  return Math.round(n * 100) / 100;
}

function showMsg(el, msg) {
  el.hidden = false;
  el.textContent = msg;
}

function hideMsg(el) {
  el.hidden = true;
  el.textContent = "";
}

// =====================
// Tabs (reusable, supports nested tabs)
// HTML requirement:
// - Tab buttons:   .tabs[data-scope="main|unit"] .tab   with data-tab="..."
// - Panels:        .tab-panel[data-scope="main|unit"]   with data-panel="..."
// =====================
function setupTabs(scopeName) {
  const tabs = document.querySelectorAll(`.tabs[data-scope="${scopeName}"] .tab`);
  const panels = document.querySelectorAll(`.tab-panel[data-scope="${scopeName}"]`);

  if (!tabs.length || !panels.length) return;

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      // active tab button
      tabs.forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");

      // show correct panel
      panels.forEach((p) => p.classList.remove("active"));
      const target = btn.dataset.tab;

      const panelToShow = document.querySelector(
        `.tab-panel[data-scope="${scopeName}"][data-panel="${target}"]`
      );

      if (panelToShow) panelToShow.classList.add("active");
    });
  });
}

// Setup 2 cấp tab
setupTabs("main"); // temp / unit
setupTabs("unit"); // length / weight / time

// ----
const tempForm = document.getElementById("tempForm");
const tempValue = document.getElementById("tempValue");
const tempFrom = document.getElementById("tempFrom");
const tempTo = document.getElementById("tempTo");
const tempOutput = document.getElementById("tempOutput");
const btnTempReset = document.getElementById("btnTempReset");

function round2(n) {
  return Math.round(n * 100) / 100;
}

function toCelsius(value, from) {
  if (from === "C") return value;
  if (from === "F") return (value - 32) * (5 / 9);
  if (from === "K") return value - 273.15;
}

function fromCelsius(c, to) {
  if (to === "C") return c;
  if (to === "F") return c * (9 / 5) + 32;
  if (to === "K") return c + 273.15;
}

tempForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const v = Number(tempValue.value);
  if (Number.isNaN(v) || tempValue.value.trim() === "") {
    tempOutput.hidden = false;
    tempOutput.textContent = "Please enter a valid number.";
    return;
  }

  const c = toCelsius(v, tempFrom.value);
  const result = fromCelsius(c, tempTo.value);

  tempOutput.hidden = false;
  tempOutput.textContent = `${round2(v)}°${tempFrom.value} = ${round2(result)}°${tempTo.value}`;
});

btnTempReset.addEventListener("click", () => {
  tempForm.reset();
  tempOutput.hidden = true;
  tempOutput.textContent = "";
});

// --- Unit
const unitForm = document.getElementById("unitForm");
const unitValue = document.getElementById("unitValue");
const unitFrom = document.getElementById("unitFrom");
const unitTo = document.getElementById("unitTo");
const unitOutput = document.getElementById("unitOutput");
const btnUnitReset = document.getElementById("btnUnitReset");

const lengthToMeter = {
  m: 1,
  cm: 0.01,
  km: 1000,
};

unitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const v = Number(unitValue.value);
  if (Number.isNaN(v) || unitValue.value.trim() === "") {
    unitOutput.hidden = false;
    unitOutput.textContent = "Please enter a valid number:";
    return;
  }

  const from = unitFrom.value;
  const to = unitTo.value;

  const meters = v * lengthToMeter[from];
  const result = meters / lengthToMeter[to];

  unitOutput.hidden = false;
  unitOutput.textContent = `${round2(v)} ${from} = ${round2(result)} ${to}`;
});

btnUnitReset.addEventListener("click", () => {
  unitForm.reset();
  unitOutput.hidden = true;
  unitOutput.textContent = "";
});

// --- Weight
const weightForm = document.getElementById("weightForm");
const weightValue = document.getElementById("weightValue");
const weightFrom = document.getElementById("weightFrom");
const weightTo = document.getElementById("weightTo");
const weightOutput = document.getElementById("weightOutput");
const btnWeightReset = document.getElementById("btnWeightReset");

const weightToKg = {
  kg: 1,
  g: 0.001,
  lb: 0.45359237,
};

if (weightForm) {
  weightForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const v = Number(weightValue.value);
    if (Number.isNaN(v) || weightValue.value.trim() === "") {
      weightOutput.hidden = false;
      weightOutput.textContent = "Please enter a valid number:";
      return;
    }

    const from = weightFrom.value;
    const to = weightTo.value;

    const kg = v * weightToKg[from];
    const result = kg / weightToKg[to];

    weightOutput.hidden = false;
    weightOutput.textContent = `${round2(v)} ${from} = ${round2(result)} ${to}`;
  });

  btnWeightReset.addEventListener("click", () => {
    weightForm.reset();
    weightOutput.hidden = true;
    weightOutput.textContent = "";
  });
}

// --- Time
const timeForm = document.getElementById("timeForm");
const timeValue = document.getElementById("timeValue");
const timeFrom = document.getElementById("timeFrom");
const timeTo = document.getElementById("timeTo");
const timeOutput = document.getElementById("timeOutput");
const btnTimeReset = document.getElementById("btnTimeReset");

const timeToSecond = {
  s: 1,
  min: 60,
  h: 3600,
};

if (timeForm) {
  timeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const v = Number(timeValue.value);
    if (Number.isNaN(v) || timeValue.value.trim() === "") {
      timeOutput.hidden = false;
      timeOutput.textContent = "Please enter a valid number:";
      return;
    }

    const from = timeFrom.value;
    const to = timeTo.value;

    const seconds = v * timeToSecond[from];
    const result = seconds / timeToSecond[to];

    timeOutput.hidden = false;
    timeOutput.textContent = `${round2(v)} ${from} = ${round2(result)} ${to}`;
  });

  btnTimeReset.addEventListener("click", () => {
    timeForm.reset();
    timeOutput.hidden = true;
    timeOutput.textContent = "";
  });
}
