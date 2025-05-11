// 50. Write a program accept 5 subject marks (Hint P=67, C=87, M=90, H=98, E=88) and calculate total marks and percentage.

function app(H,E,M,B,C)
{
    let Totalmarks = H + E + M + B + C;
    let res = Totalmarks / 5;
    console.log(" Total Percentage : ",res);
}
app(67,87,90,88,98)
