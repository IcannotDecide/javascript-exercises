const removeFromArray = function(arr, ...remove) {
    let newArr = arr;
    
    for (let i = 0; i < newArr.length; i++) {
        for (let  j = 0; j < remove.length; j++) {
            if (newArr[i] === remove[j]) {
                newArr.splice(i, 1);
                i--;
            }
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
