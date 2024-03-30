const userListener = (status) => {
    if(status === 'NEW') {
        return `Send a confirmation email to the customer that the order has been received.`;
    } else if(status === 'PROCESSING') {
        return `Inform the customer that their order is being processed and will soon be shipped.`;
    } else if(status === 'SHIPPED') {
        return `Notify the customer that their order has been shipped, including tracking information if available.`;
    } else if(status === 'DELIVERED') {
        return  `Send a delivery confirmation email, possibly asking for feedback or providing information on return policies if the customer is not satisfied.`;
    }
};
const warehouseListener = (status) => {
    if(status === 'NEW') {
        return `Send a confirmation email to the customer that the order has been received.`;
    } else if(status === 'PROCESSING') {
        return `Inform the customer that their order is being processed and will soon be shipped.`;
    } else if(status === 'SHIPPED') {
        return `Notify the customer that their order has been shipped, including tracking information if available.`;
    } else if(status === 'DELIVERED') {
        return  `Send a delivery confirmation email, possibly asking for feedback or providing information on return policies if the customer is not satisfied.`;
    }
};
const courierListener = (status) => {
    if(status === 'NEW') {
        return `Send a confirmation email to the customer that the order has been received.`;
    } else if(status === 'PROCESSING') {
        return `Inform the customer that their order is being processed and will soon be shipped.`;
    } else if(status === 'SHIPPED') {
        return `Notify the customer that their order has been shipped, including tracking information if available.`;
    } else if(status === 'DELIVERED') {
        return  `Send a delivery confirmation email, possibly asking for feedback or providing information on return policies if the customer is not satisfied.`;
    }
};

export { userListener, warehouseListener, courierListener };
