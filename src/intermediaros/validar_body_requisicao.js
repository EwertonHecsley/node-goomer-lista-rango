const validarBody = schema => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: error.message })
    }
};

module.exports = {
    validarBody
}