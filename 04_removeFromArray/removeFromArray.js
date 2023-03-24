const removeFromArray = function(array, ...removed) {
    for (let i = 1; i < arguments.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] === arguments[i]){
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
};

//console.log( removeFromArray([0, 1, 2, 3, 4], 1, 2, 3) );

// Do not edit below this line
module.exports = removeFromArray;
