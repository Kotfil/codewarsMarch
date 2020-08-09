// string = ('wert');
//
//
// const removeChar = string =>
//     string
//         .split('')
//         .slice(1, string.length - 1)
//         .join('')
//
// console.log (removeChar);

let str = 'world';
let strReverse = str.split('').reverse().join('');

console.log(strReverse);

let arr = [1,2,3,4,5];

let s = arr.reduce((acc,el) => {
        return acc = [...acc,el]
},0);
console.log(s)
// const switchItUp = n =>
//     [
//         'Zero',
//         'One',
//         'Two',
//         'Three',
//         'Four',
//         'Five',
//         'Six',
//         'Seven',
//         'Eight',
//         'Nine',
//     ][n]

