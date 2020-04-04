function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result ' + num)
}

//function without a return statement does not return anything, which means it returns type void. Specifying void means you can ignore
//result that might come

function addAndHandle(num1: number, num2: number, callback: (num: number) => void) {
    const result = num1 + num2;
    callback(result)
}
let combinevalues: (a: number, b: number) => number;
combinevalues = add;
console.log(combinevalues(8, 8))

addAndHandle(10, 20, (result) => {console.log(result)})