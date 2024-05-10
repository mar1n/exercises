class OrderManger {
    constructor() {
        this.orders = [];
    }

    execute(command, ...args) {
        console.log("args", args);
        return command.execute(this.orders, ...args);
    }
}

class Command {
    constructor(execute) {
        this.execute = execute;
    }
}

function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
        orders.push(id);
        return `You have successfully ordered ${order} (${id})`
    })
}

function CancelOrderCommand(id) {
    return new Command((orders) => {
        orders = orders.filter((order) => order.id !== id);
        return `You have canceled your order ${id}`;
    });
}

function TrackOrderCommand(id) {
    return new Command(() => `Your order ${id} will arrive in 20 minutes.`)
}

const order = new OrderManger();


console.log(order.execute(PlaceOrderCommand("tomato", 44)));