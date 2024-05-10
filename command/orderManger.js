class OrderManger {
    constructor() {
        this.orders = []
    }

    placeOrder(order, id) {
        this.orders.push({id, order});
        return `You have successfully ordered ${order} (${id})`;
    }

    trackOrder(id) {
        const order = this.orders.find(order => order.id === id);
        return `You order  ${order.id} will arrive in 20 minutes.`;
    }

    cancelOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id);
        return `You have canceled your order ${id}`;
    }
}

const order = new OrderManger();


console.log(order.placeOrder("Tomato", 44));
console.log(order.trackOrder(44));