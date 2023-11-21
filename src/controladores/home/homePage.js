const home = (_req, res) => {
    return res.status(200).json({ mensagem: 'Bem-vindo' });
};

module.exports = { home };