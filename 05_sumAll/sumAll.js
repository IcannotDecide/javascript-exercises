const sumAll = function(start, end) {

    if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0) return "ERROR";

    let nums = [start, end].sort((a, b) => a - b)

    let sum = 0;

    for (let i = nums[0]; i <= nums[1]; i++) sum +=i;

    return sum
};

// Do not edit below this line
module.exports = sumAll;
