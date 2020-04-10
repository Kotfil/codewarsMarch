string = ('wert');


const removeChar = string =>
    string
        .split('')
        .slice(1, string.length - 1)
        .join('')

console.log (removeChar);
