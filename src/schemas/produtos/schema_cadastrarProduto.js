const joi = require('joi');

const schemaCadProduto = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'Campo nome é obrigatorio.',
        'string.empty': 'Campo nome não pode ser vazio.'
    }),
    preco_produto: joi.number().required().messages({
        'any.required': 'Campo preco_produto é obrigatorio.',
        'number.empty': 'Campo preco_produto não pode ser vazio.'
    }),
    categoria_produto_id: joi.number().required().messages({
        'any.required': 'Campo categoria_produto_id é obrigatorio.',
        'number.empty': 'Campo categoria_produto_id não pode ser vazio.'
    }),
    promocao: joi.boolean().required().messages({
        'any.required': 'Campo promocao é obrigatorio.'
    })
});

module.exports = schemaCadProduto