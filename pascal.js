function getPascalTriangle(n) {
    var resultArray = [];
    if (n === 0) {
        resultArray.push(1);
    } else if (n < 0) {
        resultArray.push(-1);
    } else {
        for (var i = 0; i < n; i++) {
            resultArray.push(1);
            for (var j = 0; j < n; j++) {
                //resultArray.push(j + n);
            }
            resultArray.push(1);
        }
    }

    return resultArray.join(' ');
}

console.log(getPascalTriangle(0));
console.log(getPascalTriangle(1));
console.log(getPascalTriangle(2));
console.log(getPascalTriangle(3));