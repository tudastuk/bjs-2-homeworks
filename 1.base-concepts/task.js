"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4*a*c; 
  
  if (discriminant === 0) {
      let root = -b/(2*a);
      arr.push(root);
  } else if (discriminant > 0) {
      let rootSum = (-b + Math.sqrt(discriminant) )/(2*a);
      let rootMin = (-b - Math.sqrt(discriminant) )/(2*a);
      arr.push(rootSum, rootMin);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   if ( isNaN(percent) || percent <= 0 || percent > 100){
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
} 

if (isNaN(contribution) || contribution < 0 || contribution > amount) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
}

if (isNaN(amount) || amount <= 0 || amount < contribution) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
}
let creditBody = amount - contribution;
let startDate = new Date(); 
let endDate = new Date(date); 
let creditDuration = (endDate.getMonth() - startDate.getMonth()) + (endDate.getFullYear() - startDate.getFullYear())*12; //срок кредита в месяцах
let p = percent/(100*12);
let payment = creditBody*(p + (p/(Math.pow(1 + p, creditDuration) - 1)));
let totalAmount = Number((payment*creditDuration).toFixed(2));  //ежемесячный платеж * срок, округляем до 2зн после запятой (тип данных преобраз в строку), преобразуем обратно в число
console.log (totalAmount);
return totalAmount;
}
