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

//5. Write function, which returns array of names of people, who are over 18 and their favorite fruit is apple. Reuse functions from task 2 and 3.
function getAdultAppleLovers(data) {
    return map(filter(data, (el) => el.age > 18 && el.favoriteFruit === 'apple'), (el) => el.name);
}
//getAdultAppleLovers(data) // returns [‘Stein’]

//6. Write function, which returns array of keys of an object.
function keys(obj) {
    let arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}
//keys({keyOne: 1, keyTwo: 2, keyThree: 3}) => [“keyOne”, “keyTwo”, “keyThree”]

//7. Write function, which returns array of values of an object.
function values(obj) {
    let arr = [];
    for (let el in obj) {
        if (obj.hasOwnProperty(el)) {
            arr.push(obj[el]);
        }
    }
    return arr;
}
//values ({keyOne: 1,keyTwo: 2,keyThree: 3}); => [1, 2, 3];

//8. Write function, which returns formatted date.
function showFormattedDate(date) {
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
}
//showFormattedDate(new Date('2018-08-27T01:10:00')) => ‘It is 27 of Aug, 2018’