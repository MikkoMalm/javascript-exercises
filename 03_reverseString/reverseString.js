const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinString = reverseArray.join("")
    console.log(joinString);
    return joinString
};

// Do not edit below this line
module.exports = reverseString;
