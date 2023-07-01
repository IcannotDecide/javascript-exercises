const fibonacci = function (num) {
    let arr = [1]
    let oldNum = 1;
    let newNum = 1;
    let temp;

    if (+num > 0) {
        while (arr.length < num) {
            arr.push(newNum);
            temp = newNum;
            newNum += oldNum;
            oldNum = temp;
        }
      return arr[num-1]
    }
    return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
