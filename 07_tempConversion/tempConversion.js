const ftoc = function(num) {
    // fahrenheit to celsius, //[°C] = ([°F] − 32) × 5⁄9

    let fah = (num - 32) * (5 / 9);

    let sum = Math.round(fah * 10) / 10;
    return sum;
};

/* This is shortcut method
const ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10;
}; */

const ctof = function(num) {
    // celsius to fahrenheit, [°F] = [°C] × 9⁄5 + 32

    let cel = (num * (9 / 5) + 32);
    let sum = Math.round(cel * 10) / 10;
    return sum;
};

/*  Shorcut method
 const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
}; */

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};