"use strict";
class Pizza {
    constructor(size, extraCheese, pepperoni, pineapple, ham) {
        this._size = size;
        this._extraCheese = extraCheese;
        this._pepperoni = pepperoni;
        this._pineapple = pineapple;
        this._ham = ham;
    }
    set setSizePizza(value) {
        this._size = value;
    }
    get getExtraCheese() {
        return this._extraCheese;
    }
    set setExtraCheese(value) {
        this._extraCheese = value;
    }
    get getPeperoniToppings() {
        return this._pepperoni;
    }
    set setPeperoniToppings(value) {
        this._pepperoni = value;
    }
    get getPineappleToppings() {
        return this._pineapple;
    }
    set setPineappleToppings(value) {
        this._pineapple = value;
    }
    get getHamToppings() {
        return this._ham;
    }
    set setHamToppings(value) {
        this._ham = value;
    }
    getCost() {
        let pricePizza = 0;
        switch (this._size) {
            case 'Small':
                pricePizza = 10 + ((this._extraCheese) ? 1 * 2 : 0) + (this._pepperoni * 2) + (this._pineapple * 2) + (this._ham * 2);
                break;
            case 'Medium':
                pricePizza = 12 + ((this._extraCheese) ? 1 * 4 : 0) + (this._pepperoni * 2) + (this._pineapple * 2) + (this._ham * 2);
                break;
            case 'Large':
                pricePizza = 14 + ((this._extraCheese) ? 1 * 6 : 0) + (this._pepperoni * 3) + (this._pineapple * 3) + (this._ham * 3);
                break;
            case 'Extra-large':
                pricePizza = 18 + ((this._extraCheese) ? 1 * 6 : 0) + (this._pepperoni * 4) + (this._pineapple * 4) + (this._ham * 4);
                break;
            default:
                break;
        }
        return pricePizza;
    }
}
let pizzaSmall = new Pizza("Small", true, 1, 2, 3);
let pizzaMedium = new Pizza("Medium", false, 3, 2, 1);
let pizzaLarge = new Pizza("Large", false, 5, 6, 7);
let pizzaXLarge = new Pizza("Extra-large", true, 2, 4, 6);
console.log(pizzaSmall.getCost());
console.log(pizzaMedium.getCost());
console.log(pizzaLarge.getCost());
console.log(pizzaXLarge.getCost());
