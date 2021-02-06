function reverseArray(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

console.log(reverseArray([1,2,3,4,5]))
