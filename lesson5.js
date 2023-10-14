var address = require("./mymodule3");
console.log(address.name);
console.log(address.city);
console.log(address.pincode);
// console.log(address.add(10,20));
let addition = address.add(10,20);
let substraction = address.sub(10,20);
let multification = address.mul(10,20);
let division = address.div(10,20);
console.log(addition , substraction , multification , division);

