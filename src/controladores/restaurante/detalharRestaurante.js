const detalharRestaurante = (req, res) => {
    return res.status(200).json(req.restaurante)
};

module.exports = {
    detalharRestaurante
}