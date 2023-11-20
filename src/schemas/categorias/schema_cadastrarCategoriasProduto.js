const joi = require('joi');

const schemaCadCatProd = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'Campo descricao é obrigatorio.',
        'string.empty': 'Campo descricao não pode ser vazio.'
    })
});

module.exports = schemaCadCatProd;