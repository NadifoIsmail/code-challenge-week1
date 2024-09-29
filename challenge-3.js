//added the prompt-sync module to get input from the user
const prompt = require("prompt-sync")();
//function to calculate the net salary 
function calculateNetSalary(basicSalary, benefits) {
    //grossSalary is the total amount of basicSalary and the benefits without deductions such as payee,nhif and nssf
  grossSalary = basicSalary + benefits;

  // deduction rates
  const nhifRate = 0.05;
  const nssfRate = 0.08;
  const payeeRate= 0.1;
  const housingLevy = 0.2;

  //calculate the deductions
  let nhifDeductions = grossSalary * nhifRate;
  let nssfDeductions = grossSalary * nssfRate;
  let housingLevyDeductions = grossSalary * housingLevy;

   //calculate the taxable income
   let taxableIncome = grossSalary - nssfDeductions - nhifDeductions - housingLevy;
   let payeeDeductions = taxableIncome * payeeRate ;

   //calculate the net salary
   let netSalary = grossSalary - payeeDeductions - nhifDeductions - nssfDeductions - housingLevyDeductions;

 //results 
 console.log(`Basic salary: Ksh ${basicSalary.toFixed(2)}`)
 console.log(`Benefits: Ksh ${benefits.toFixed(2)}`)
 console.log(`Gross salary: Ksh ${grossSalary.toFixed(2)}`)
 console.log(`NHIF deduction: Ksh ${nhifDeductions.toFixed(2)}`)
 console.log(`NSSF deductions: Ksh ${nssfDeductions.toFixed(2)}`)
 console.log(`Housing Levy deductions: Ksh ${housingLevyDeductions.toFixed(2)}`)
 console.log(`PAYEE deductions: Ksh ${payeeDeductions.toFixed(2)}`)
 console.log(`Net salary: Ksh ${netSalary.toFixed(2)}`)

}
//Allow the user to enter their basic salary
let basicSalary = prompt("Enter basic salary:");
basicSalary = parseFloat(basicSalary);

//Allow the user to enter their benefits
let benefits = prompt("Enter your benefits:");
benefits = parseFloat(benefits);


//call the function to determine the net salary 
calculateNetSalary(basicSalary, benefits);


