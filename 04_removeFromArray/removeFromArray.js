const removeFromArray = function(array, ...removed) {
    for (let j = 0; j < arguments[arguments.length - 1]; j++){
        for (let i = 0; i < array.length; i++){
            if (array[i] === arguments[j]){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

console.log( removeFromArray([0, 1, 2, 3, 4], 3, 4) );

// Do not edit below this line
//module.exports = removeFromArray;
