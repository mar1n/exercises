import orderProcessor from "./orderProcessor.mjs";

const module = {
    facade({fruits, vegetables, cardNumber, delivery}) {
        orderProcessor.order(fruits, vegetables, cardNumber, delivery)
    }
}

export default module;