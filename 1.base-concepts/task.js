function solveEquation(a, b, c) {
  let arr = [];
  let total = (b ** 2) - 4 * a * c;

  if (total === 0) {
    arr = [-b / (2 * a)];
  } else if (total > 0) {
    arr = [(-b + Math.sqrt(total)) / (2 * a), (-b - Math.sqrt(total)) / (2 * a)];
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  
  percent = percent/100/12;
  let creditBody = amount - contribution;
  let monthPay = creditBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalPay = monthPay * countMonths;
  totalPay = Number(totalPay.toFixed(2));

  return totalPay;
}
