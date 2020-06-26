'use strict';

// Задача 1

function getSolutions(a, b, c)  {

    let res = {}; 
    let x = [];
    
    let D = Math.pow(b, 2) - (4 * a * c);

    if (D === 0) {
        x[0] = -b / (2 * a);
    
    } else if (D > 0) {
        x[0] = (-b + Math.sqrt(D)) / (2 * a); 
        x[1] = (-b - Math.sqrt(D)) / (2 * a);
    }
    res.D = D;
    res.roots = x;
 
    return res;
}

function showSolutionsMessage(a, b, c) {

    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`);
    }

}

// showSolutionsMessage ( 1 ,  2 ,  3); 
// showSolutionsMessage ( 7 ,  20 ,  -3 );
// showSolutionsMessage ( 2 ,  4 ,  2 ); 


// Задача 2

function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function getAverageScore(data) {
    let result = {};
    let allAverages = [];
    for (let obj in data) {
        result[obj] = getAverageMark(data[obj]);
        allAverages.push(result[obj]);
    }
    result.average = getAverageMark(allAverages);
    return result;
}