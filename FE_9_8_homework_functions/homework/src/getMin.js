function getMin(...arr) {
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] < arguments[0]){
           arguments[0] = arguments[i];
        }
    }
return arguments[0];
}
//console.log(getMin(3, 0, -3)) => -3;