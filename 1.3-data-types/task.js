'use strict'
function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(percent)) {
        console.log(`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
        return;
    }
    else if (isNaN(contribution)) {
        console.log(`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);
        return;
    }
    else if (isNaN(amount)) {
        console.log(`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);
        return;
    }
    else {
        let body = amount - contribution;
        let creditTerm =  ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
        let valueForAmount = (percent/100)/12;
        let paidMonthly = body * (valueForAmount + valueForAmount / (((1 + valueForAmount) ** creditTerm) - 1));
        let totalAmount = parseFloat(creditTerm * paidMonthly).toFixed(2);
        return totalAmount;
    }
}

function getGreeting(name) {
    let greeting = ""
    console.log(name)
    if (name === "undefined" || name === "null" || name === "") {
        greeting = `Привет, мир!Меня зовут Аноним.`
    } else {
        greeting = `Привет, мир! Меня зовут ${name} .`
    }
    return greeting;
}