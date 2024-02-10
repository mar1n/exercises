const shippingService = {
    deliveryPrice: 0,
    courier(name) {
        if(name === 'DPD') {
            this.deliveryPrice = 10;
            return `Price for delivery by DPD is 10£`;
        } else if(name === 'UPS') {
            this.deliveryPrice = 15;
            return `Price for delivery by UPS is 15£`;
        }

    }
}

export default shippingService;