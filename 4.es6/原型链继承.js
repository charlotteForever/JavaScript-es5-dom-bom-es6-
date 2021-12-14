let Animal = function () {
    this.eat = function () {
        console.log('animal eat');
    }
}

let Dog = function () {
    this.bark = function () {
        console.log('dog bark');
    }
}

Dog.prototype = new Animal();
let hashiqi = new Dog();
hashiqi.eat();
hashiqi.bark();