"use strict";

let firstName = [];
let lastName = [];
let password = [];
let gmail = [];

let passwordLogin;
let gmailLogin;

let action = Number();

let firstNameReg;
let lastNameReg;
let passwordReg;
let gmailReg;
// ==== PASIRINKIMAI ==== //
while (true) {
  action = +prompt(`Choose Registration(1) or Login(2):`);
  if (action != 0 && action != 1 && action != 2) {
    console.log(`Please choose one option(Registration: 1 Login:2 (0 to exit)`);
    alert(`Please choose one option(Registration: 1 Login:2 (0 to exit)`);
  }
  if (action == 1) { // ==== REGISTRACIJA ==== //
     // ==== DUOMENŲ PATIKRA ==== //
    firstNameReg = prompt(`Enter first name:`);
    if (!validateName(firstNameReg)) {
      console.log(`First name must only contain letters`);
      continue;
    }
    lastNameReg = prompt(`Enter last name:`);
    if (!validateName(lastNameReg)) {
      console.log(`Last name must only contain letters`);
      continue;
    }
    passwordReg = prompt(`Enter password:`);
    if (!validatePassword(passwordReg)) {
      console.log(`Password must be contain at least 5 symbols`);
      continue;
    }
    gmailReg = prompt(`Enter gmail:`);
    if (!validateEmailDuplicates(gmailReg)) {
      console.log(`User with this gmail is already registered. Use a different one`);
      continue;
    }
    if (!validateEmail(gmailReg)) {
      console.log(`Enter proper email example@gmail.com`);
      continue;
    }
    registration(firstNameReg, lastNameReg, passwordReg, gmailReg);
  }
  if (action == 2) { // ==== PRISIJUNGIMAS ==== //
    passwordLogin = prompt(`Enter password:`);
    gmailLogin = prompt(`Enter gmail:`);
    login(passwordLogin, gmailLogin);
  }
  if (action == 0) { // ==== IŠĖJIMAS ==== //
    break;
  }
}
// ==== DUOMENŲ STRUKTŪROS ==== //
function validateName(name) {
  return /^[a-zA-Z]+$/.test(name);
}
function validatePassword(password) {
  return String(password).length >= 5;
}
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function validateEmailDuplicates(emailTest) {
  for (let i = 0; i < gmail.length; i++) {
    if (gmail[i] === emailTest) {
      return false;
    }
  }
  return true;
}
// ==== REGISTRACIJOS SU'PUSH'INIMAS Į MASYVUS ==== //
function registration(firstNameReg, lastNameReg, passwordReg, gmailTemp) { 
  firstName.push(firstNameReg);
  lastName.push(lastNameReg);
  password.push(passwordReg);
  gmail.push(gmailTemp);
  console.log(`Registration succesful`);
  return `Registration succesful`;
}
// ==== PRISIJUNGIMO ATITIKIMAS PAGAL REGISTRACIJOS DUOMENIS ==== //
function login(passwordLogin, gmailLogin) {
  for (let i = 0; i < gmail.length; i++) {
    if (gmailLogin == gmail[i] && passwordLogin == password[i]) {
      console.log(`Login success. Welcome, ${firstName[i]}`);
      return `Login success`;
    }
  }
  console.log(`Try again`);
  return `Try again`;
}