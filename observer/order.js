class Order {
    constructor() {
        this.status = ''
    }

    updateStatus(status) {
        this.status = status;
    }
}

const order = new Order();
console.log(order.status)
order.updateStatus("New")
console.log(order.status)
//console.dir(order);


