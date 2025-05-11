// *18. Write a program to calculate Compound Interest.

function app() {
    let principal = 50000, rate = 5, time = 2;

/* Calculate compound interest */
let A = principal * (Math.pow((1 + rate / 100), time));
let CI = A - principal;

console.log("Compound interest is " + CI);
}
app()