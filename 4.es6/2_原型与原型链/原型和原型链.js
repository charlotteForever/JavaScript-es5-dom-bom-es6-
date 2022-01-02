let Famale = function () {

}
// Famale.prototype.sex = 'girl';
let caicai = new Famale();
// console.log(caicai.sex);

console.log(caicai.__proto__ === Famale.prototype);
console.log(Famale.prototype.constructor === Famale);