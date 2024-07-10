function calculateTax() {
  const taxBrackets = [
    { limit: 250000, rate: 0.0 }, // No tax for income up to ₹2,50,000
    { limit: 500000, rate: 0.05 }, // 5% for income between ₹2,50,001 and ₹5,00,000
    { limit: 1000000, rate: 0.2 }, // 20% for income between ₹5,00,001 and ₹10,00,000
    { limit: Infinity, rate: 0.3 }, // 30% for income above ₹10,00,000
  ];
  return function (income) {
    let tax = 0;
    let remainingIncome = income;
    for (let i = 0; i < taxBrackets.length; i++) {
      const { limit, rate } = taxBrackets[i];
      let prevLimit = taxBrackets[i - 1]?.limit || 0;
      if (remainingIncome > 0) {
        let taxableAmount = Math.min(remainingIncome, limit - prevLimit);
        tax += taxableAmount * rate;
        remainingIncome -= taxableAmount;
      }
    }
    console.log(tax);
  };
}
const getTaxAmount = calculateTax();
getTaxAmount(200000);
getTaxAmount(300000);
getTaxAmount(700000);
getTaxAmount(15000000);
