const num = [2, 4, 5, 67, 78];
const even = num.filter((i) => i % 2 == 0);
console.log("num", num);
console.log("even", even);

const square = even.map((i) => i * i); //through map you can convert in any to the array numbers using any mathematical expression
console.log("square", square);

const sum = square.reduce((s, i) =>(s + i));
console.log("sum", sum);
