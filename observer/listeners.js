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
        return `No action needed immediately upon order creation, as the stock is typically reserved when the order moves to the Processing state.`;
    } else if(status === 'PROCESSING') {
        return `Decrease the stock level of the ordered items to reflect that they are being prepared for shipment.`;
    } else if(status === 'SHIPPED') {
        return `No additional action needed, as the stock has already been updated at the Processing stage.`;
    } else if(status === 'DELIVERED') {
        return  `Monitor for potential returns. If a product is returned, the stock should be adjusted accordingly, but this might be handled by a different process or observer focused on returns.`;
    }
};
const courierListener = (status) => {
    if(status === 'NEW') {
        return `No action needed, as shipping details are typically generated and sent to the shipping system when the order status changes to Processing.`;
    } else if(status === 'PROCESSING') {
        return `Generate and send shipping details to the external shipping system or service. This might include recipient address, order weight, and any special shipping instructions.`;
    } else if(status === 'SHIPPED') {
        return `Update the external shipping system with the status and, if necessary, tracking number. This ensures that the shipping service knows the package is on its way and can provide tracking updates to the customer.`;
    } else if(status === 'DELIVERED') {
        return  `Confirm delivery with the shipping system. This might involve updating the system to ensure that the order is marked as delivered, which could trigger any final delivery confirmation notifications to the customer.`;
    }
};

export { userListener, warehouseListener, courierListener };
