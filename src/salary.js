module.exports = (salary, calBonus) => {
  if (salary <= 0) {
    calBonus(new Error("Please enter a valid salary"), null);
  } else if (salary <= 10000) {
    calBonus(null, salary * 0.1);
  } else if (salary <= 20000) {
    calBonus(null, salary * 0.15);
  } else if (salary >= 30000) {
    calBonus(null, salary * 0.2);
  }
};
