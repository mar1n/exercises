const inventory = {
    itemsPrice : 0,
    fruitPrice : 5,
    vegetablePrice : 10,
    fruit: 5,
    vegetables: 10,
    sellFruits(amount) {
        this.itemsPrice = amount * this.fruitPrice;
        this.fruit = this.fruit - amount;
    },
    sellVegetables(amount) {
        this.itemsPrice = amount * this.vegetablePrice;
        this.vegetables = this.vegetables - amount;
    },
    showInventory() {
        console.log(`Fruits in inventory ${this.fruit}, vegetables in in inventory ${this.vegetables}`);
    },
    showPrice() {
        console.log(`Price for all items is ${this.itemsPrice}`);
    }

}

export default inventory;