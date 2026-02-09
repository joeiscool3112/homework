const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");
const messageError = document.querySelector("#messageError");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
const phoneRegex = /^\d{9,11}$/;           

function setError(inputEl, errorEl, msg) {
  errorEl.innerText = msg;
  inputEl.classList.add("input-error");
}


function clearError(inputEl, errorEl) {
  errorEl.innerText = "";
  inputEl.classList.remove("input-error");
}

function validate() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  let isValid = true;

  clearError(nameInput, nameError);
  clearError(emailInput, emailError);
  clearError(phoneInput, phoneError);
  clearError(messageInput, messageError);

  if (name === "") {
    setError(nameInput, nameError, "name required");
    isValid = false;
  } 

  if (email === "") {
    setError(emailInput, emailError, "Email required");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    setError(emailInput, emailError, "invalid email");
    isValid = false;
  } 

  if (phone === "") {
    setError(phoneInput, phoneError, "Phone required");
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    setError(phoneInput, phoneError, "9-11 numbers only");
    isValid = false;
  } 

  if (message === "") {
    setError(messageInput, messageError, "no empty msg");
    isValid = false;
  } 

  return { isValid, data: { name, email, phone, message } };
}

function onSubmitForm(e) {
  e.preventDefault();

  const result = validate();
  if (result.isValid) {
    console.log(result.data);
  }
}

form.addEventListener("submit", onSubmitForm);

[nameInput, emailInput, phoneInput, messageInput].forEach((input) => {
  input.addEventListener("input", () => {
    if (input === nameInput && nameInput.value.trim() !== "") clearError(nameInput, nameError);
    if (input === emailInput && emailInput.value.trim() !== "") clearError(emailInput, emailError);
    if (input === phoneInput && phoneInput.value.trim() !== "") clearError(phoneInput, phoneError);
    if (input === messageInput && messageInput.value.trim() !== "") clearError(messageInput, messageError);
  });
});
