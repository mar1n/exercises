import inventory from "./inventory.mjs"
import shippingService from "./shippingService.mjs";
import paymentGateway from "./paymentGateway.mjs";

const orderProcessor = {
    price: 0,
    order(fruit, vegetable, cardNumber, shippingCompany) {
        inventory.sellFruits(fruit);
        inventory.sellVegetables(vegetable);
        shippingService.courier(shippingCompany);
        console.log(paymentGateway.cardNumber(cardNumber));
        this.price = this.price + inventory.itemsPrice + shippingService.deliveryPrice;
        console.log(`The price is ${this.price}.`);
    }
}

export default orderProcessor;