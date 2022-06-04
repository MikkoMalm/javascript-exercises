const ftoc = function(number) {

  let conversion = (number - 32) / 1.8000;

  return parseInt(conversion.toFixed(1));

};

const ctof = function(number) {

  let conversion = number * 1.8000 + 32;
  
  return parseInt(conversion.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
