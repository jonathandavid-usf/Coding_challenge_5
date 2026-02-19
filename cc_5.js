const employees = [
    { name: "Alice", hourlyRate: 25, hoursWorked: 40 },
    { name: "Bob", hourlyRate: 30, hoursWorked: 35 },
    { name: "Charlie", hourlyRate: 20, hoursWorked: 45 }
];

function calculateBasePay(rate, hours) {
    if (hours > 40) {
        return rate * 40;
    } else {
        return rate * hours;
    } 
}

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (rate * 1.5) * (hours - 40);
    } else {
        return 0;
    }
}

function calculateTaxes(grossPay) {
    return grossPay * 0.85;
}
 
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    }; 
} 

for (const employee of employees) {
    const payrollInfo = processPayroll(employee);
    console.log(payrollInfo);
}
