
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");
const studentTable = document.getElementById("studentTable");
const countBadge = document.getElementById("countBadge");
const totalStudentsEl = document.getElementById("totalStudents");
const avgGradeEl = document.getElementById("avgGrade");
const highAchiversEl = document.getElementById("highAchivers");
const highestStudentEl = document.getElementById("highestStudent");


let students = [];

function normalizeName(str) { 
  return str.trim().replace(/\s+/g, " ");
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : NaN;
}


function validate(nameRaw, ageRaw, gradeRaw) {
  const name = normalizeName(nameRaw);
  const age = toNumber(ageRaw);
  const grade = toNumber(gradeRaw);

  if (!name) return { ok: false, msg: "empty name" };
  if (age < 15 || age > 100) return { ok: false, msg: "15-100 only" };
  if (!Number.isFinite(age)) return { ok: false, msg: "must be number" };
  if (!Number.isFinite(grade)) return { ok: false, msg: "must be number" };
  if (grade < 0 || grade > 100) return { ok: false, msg: "0 - 100 only" };
  return { ok: true, data: { name, age, grade } };
}

function renderTable() {
  if (students.length === 0) {
    studentTable.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center; opacity:.7; padding:16px;">
          No students yet
        </td>
      </tr>
    `;
    return;
  }
  else {

  studentTable.innerHTML = students
    .map((s, i) => {
      return `
        <tr>
          <td>${s.name}</td>
          <td>${s.age}</td>
          <td>${s.grade}</td>
          <td class="actions-col">
            <button data-action="delete" data-index="${i}" class="btn btn-primary">
              Delete
            </button>
          </td>
        </tr>
      `;
    })
    .join("");
}
}


function updateStats() {
  const total = students.length;
  totalStudentsEl.textContent = String(total);
  countBadge.textContent = `${total} student${total === 1 ? "" : "s"}`;
  if (total === 0) {
    avgGradeEl.textContent = "0.00";
    highAchiversEl.textContent = "0";
    highestStudentEl.textContent = "No data";
    return;
  }
  const sum = students.reduce((acc, s) => acc + s.grade, 0);
  const avg = sum / total;
  avgGradeEl.textContent = avg.toFixed(2);

  const highCount = students.filter((s) => s.grade >= 80).length;
  highAchiversEl.textContent = String(highCount);

let best = students[0]; 
for (let i = 1; i < students.length; i++) {
  if (students[i].grade > best.grade) {
    best = students[i];
  }
}
  highestStudentEl.textContent = `${best.name} (${best.grade})`;
}

function renderAll() {
  renderTable();
  updateStats();
}

function addStudent(student) {
  students.push(student);
  renderAll();
}

function deleteStudent(index) {
  students.splice(index, 1);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = validate(nameInput.value, ageInput.value, gradeInput.value);
  if (!result.ok) {
    alert(result.msg);
    return;
  }
  addStudent(result.data);
  form.reset();
  nameInput.focus();
});

studentTable.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action='delete']");
  if (!btn) return;
  const index = Number(btn.dataset.index);
  if (!Number.isInteger(index)) return;
  const ok = confirm("Delete this student?");
  if (!ok) return;
  deleteStudent(index);
});
renderAll();