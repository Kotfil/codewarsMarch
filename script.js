function doubleChar(str) {
    // Your code here
    var Arr = [];
    for(var i = 0; i <= str.length-1; i++){
        Arr.push(str[i]);
        Arr.push(str[i]);
    }
    return Arr.join('');
}