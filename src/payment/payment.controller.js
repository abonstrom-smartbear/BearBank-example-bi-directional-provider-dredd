const Payment = require("./payment");
const PaymentRepository = require("./payment.repository");

const repository = new PaymentRepository();

exports.create = async (req, res) => {
    const data = req.body
    const payment = new Payment(data.id, data.name, data.version, data.price, data.account)
    payment ? res.send(payment) : res.status(400).send({message: "invalid payment"})
};
exports.getAll = async (req, res) => {
    res.send(await repository.fetchAll())
};
exports.getById = async (req, res) => {
    const payment = await repository.getById(req.params.id);
    payment ? res.send(payment) : res.status(404).send({message: "Payment not found"})
};

exports.repository = repository;
