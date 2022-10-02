const sumAll = function(...args) {
    let elements = args;
    let lesser, larger = 0;
    let total = 0;

    //sorting the arguments
    elements.sort();
    lesser = elements[0];
    larger = elements[1];

    //error catching
    if (args[0] < 0 || args[1] < 0 || typeof args[0] != 'number' || typeof args[1] != 'number'){
            return total = "ERROR";
    }
    
    //sumAll for loop
    for (let i = lesser, j = larger; i <= j; ++i){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
