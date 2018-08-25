//1. Write function, which returns type of passed parameter
function finType(parameter) {
    return typeof parameter;
}

//findType(‘number’) => returns “string”
//findType(null) => returns “object”

//2. Write function, which iterates over array and executes function on each element.
function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        func(el);
    }
}
//forEach([2,5,8], function(el) { console.log(el)}); => 2 5 8

//3. Write function, which returns transformed array based on function, which passed as a parameter. Reuse function from task 2.
function map(arr, func) {
    let transformedArray = [];
    forEach(arr, function (el) {
        transformedArray.push(func(el));
    });
}
// map([2, 5, 8], function(el) { console.log( el + 3) }); => [5, 8, 11]

//4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.

function filter(arr, func) {
    let filteredArray = [];
    forEach(arr, function (el) {
        if (func(el)) {
            filteredArray.push(el);
        }
    });
    return filteredArray;
}

//filter([2, 5, 8], function(el) { return el > 3 }) => [5, 8]