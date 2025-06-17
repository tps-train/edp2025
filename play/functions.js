function addnums(a=1, b=3) {
    return a+b
}

console.log(addnums(5,6)) // 11
console.log(addnums(3)) // 6
console.log(addnums()) // 4

let arr = [1, 2, 3];
let nums = arr.map(function (x) { return x * x });
console.log(nums)
let squares = arr.map((x) => { return x * x });
console.log(squares)
squares = arr.map(x => { return x * x });
console.log(squares)