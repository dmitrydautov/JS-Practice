function range(startExternal, endExternal) {
    if (endExternal === undefined) {
        return function (endInternal) {
            return getRange(startExternal, endInternal);
        };
    } else {
        return getRange(startExternal, endExternal);
    }
}

function getRange(startRange, endRange) {
    var resuiltArray = [];
    for (let i = startRange; i <= endRange; i++) {
        resuiltArray.push(i);
    }
    return resuiltArray;
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []
console.log();

var start3 = range(3);
var start4 = range(4);
// start3(3);
// start3(4);
// start3(8);
// start4(3);
// start4(4);
// start4(5);
// start4(7);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
console.log(start4(6)); // [4,5,6]