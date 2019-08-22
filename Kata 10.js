/*
Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents.
Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back.
Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill.
Return a new object that describes the total amount of change for the cashier to give back.
Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
*/


const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let bills = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  while (change >= 2000) {
    change = (change - 2000);
    bills.twentyDollar += 1;
  }
  while (change >= 1000) {
    change = change - 1000;
    bills.tenDollar += 1;
  }
  while (change >= 500) {
    change = change - 500;
    bills.fiveDollar += 1;
  }
  while (change >= 200) {
    change = change - 200;
    bills.twoDollar += 1;
  }
  while (change >= 100) {
    change = change - 100;
    bills.oneDollar += 1;
  }
  while (change >= 25) {
    change = change - 25;
    bills.quarter += 1;
  }
  while (change >= 10) {
    change = change - 10;
    bills.dime += 1;
  }
  while (change >= 5) {
    change = change - 5;
    bills.nickel += 1;
  }
  while (change >= 1) {
    change = change - 1;
    bills.penny += 1;
  }
  if (bills.twentyDollar === 0) {
    delete bills.twentyDollar;
  }
  if (bills.tenDollar === 0) {
    delete bills.tenDollar;
  }
  if (bills.fiveDollar === 0) {
    delete bills.fiveDollar;
  }
  if (bills.twoDollar === 0) {
    delete bills.twoDollar;
  }
  if (bills.oneDollar === 0) {
    delete bills.oneDollar;
  }
  if (bills.quarter === 0) {
    delete bills.quarter;
  }
  if (bills.dime === 0) {
    delete bills.dime;
  }
  if (bills.nickel === 0) {
    delete bills.nickel;
  }
  if (bills.penny === 0) {
    delete bills.penny;
  }

  return bills;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


