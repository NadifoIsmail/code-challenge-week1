//added the prompt-sync module to get input from the user
const prompt = require("prompt-sync")();
//prompt the user to enter their salary
let basicSalary = parseFloat(prompt("Enter your salary:"));
//prompt the user to enter the benefits
let benefits = parseFloat(prompt("Enter your benefits:"));

//calculate gross salary
const grossSalary = basicSalary + benefits;

//function determining the payee
function payee() {
  let payeeAmount;
  if (grossSalary <= 24000) {
    payeeAmount = grossSalary * 0.1;
  } else if (grossSalary >= 24001 && grossSalary <= 32333) {
    payeeAmount = grossSalary * 0.25;
  } else if (grossSalary >= 32334 && grossSalary <= 500000) {
    payeeAmount = grossSalary * 0.3;
  } else if (grossSalary >= 500001 && grossSalary <= 800000) {
    payeeAmount = (grossSalary - 60000) * 0.25;
  } else {
    payeeAmount = grossSalary * 0.35;
  }
  return payeeAmount;
}

//function for determining NHIF deductions

function nhifDeductions() {
  let deductionAmount;
  if (grossSalary <= 5999) {
    deductionAmount = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    deductionAmount = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    deductionAmount = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    deductionAmount = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    deductionAmount = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    deductionAmount = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    deductionAmount = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    deductionAmount = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    deductionAmount = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    deductionAmount = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    deductionAmount = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    deductionAmount = 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    deductionAmount = 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    deductionAmount = 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    deductionAmount = 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    deductionAmount = 1600;
  } else {
    deductionAmount = 1700;
  }
  return deductionAmount;
}

//function for determining NSSF deduction

function nssfDeductions() {
  let nssf = grossSalary * 0.06;
  return nssf;
}
let nssf = nssfDeductions();
let nhif = nhifDeductions();
let tax = payee();

//returns the net salary of the user
const netSalary = grossSalary - (nssf + nhif + tax);
console.log(`Net Salary : ${netSalary}`);

