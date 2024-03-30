const order = {
    updateStatus: (status) => {
        "save the new status"
        this.notify();
        // if(status === "request") {
        //     "notify warehouse"
        //     "notify customer"
        // } else if(status === "processing") {
        //     "notify customer"
        //     "notify inventory"
        //     "notify courier"
        // } else if(status === "shipping") {
        //     "notify customer"
        //     "notify finance departament"
        // }
    },
    addObserver:() => "add new observer to observers list",
    reomveObserver: () => "remove observer from list",
    notify: () => "Loop through the observers and call updated on each of them",
}

const warehouse = {
    update: (newStatus) => ""
}
const customer = {
    update: (newStatus) => "notify customers that the order has new status via email"
}
