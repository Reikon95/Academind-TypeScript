function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('incorrect input');
    }
    const result = n1 + n2
    if (showResult) {
        console.log(resultPhrase + result);
    } else {
    return resultPhrase + result;
    }
}

let number1: number = 5;
let number2: number = 2.8
let printResult: boolean = true;
let resultPhrase: string = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
