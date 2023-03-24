const sumAll = function(first, last) {

    if (first < 0
        || last < 0
        || typeof(first) != ("number" || "bigint")
        || typeof(last) != ("number" || "bigint") ){
        return "ERROR";
    }

    let smaller = first;
    let larger = last;

    if (first > last){
        smaller = last;
        larger = first;
    }
    
    let sum = larger;
    while (larger !== smaller){
        larger--;
        sum = sum + larger;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
