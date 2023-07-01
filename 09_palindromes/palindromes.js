const palindromes = function (str) {
    let newStr = str.replace(/[^abcdefghiklmnopqrstuvwxyz0123456789]/gi, "").toLowerCase();
    if (newStr === newStr.split("").reverse().join("")) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
