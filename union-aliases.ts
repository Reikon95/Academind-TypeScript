export {}
//alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string'
function combine(input1: Combinable, input2: Combinable, resultType: string) {
    let result 
    if (typeof input1 === 'number' && typeof input2 === "number"){
     result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === 'as-number') {
    return parseFloat(result);
    } else if (resultType === 'as-text') {
        return result.toString()
    } else {
        return result;
    }
}

const combinedAges = combine(24, 23, 'as-number')
const combinedNames = combine("Cameron", "Josie", 'as-text')