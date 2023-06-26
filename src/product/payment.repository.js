const Product = require('./payment');

class ProductRepository {

    constructor() {
        this.payments = new Map([
            ["09", new Payment("09", "Payment 09", "v1", 99.99, "Customer 1")],
            ["10", new Payment("10", "Payment 10", "v1", 49.49, "Customer 2")],
            ["11", new Payment("11", "PAyment 11", "v2", 16.50, "Customer 3")],
        ]);
    }

    async fetchAll() {
        return [...this.payments.values()]
    }

    async getById(id) {
        return this.payments.get(id);
    }

    async create(payment) {
        return this.payments.set(payment.id, payment)
    }
}

module.exports = PaymentRepository;
