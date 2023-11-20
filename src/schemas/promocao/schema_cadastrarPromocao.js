const joi = require('joi');

const schemaCadPromocao = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'Campo descricao é obrigatorio.',
        'string.empty': 'Campo descricao não pode ser vazio.'
    }),
    preco_promocional: joi.number().required().messages({
        'any.required': 'Campo preco_promocional é obrigatorio.',
        'number.empty': 'Campo preco_promocional não pode ser vazio.'
    }),
    produto_id: joi.number().required().messages({
        'any.required': 'Campo produto_id é obrigatorio.',
    }),
    dia_semana: joi.string().required().messages({
        'any.required': 'Campo dia_semana é obrigatorio.',
        'string.empty': 'Campo dia_semana não pode ser vazio.'
    }),
    horario_inicio: joi.string().required().messages({
        'any.required': 'Campo horario_inicio é obrigatorio.',
        'string.empty': 'Campo horario_inicio não pode ser vazio.'
    }),
    horario_fim: joi.string().required().messages({
        'any.required': 'Campo horario_fim é obrigatorio.',
        'string.empty': 'Campo horario_fim não pode ser vazio.'
    })
});

module.exports = schemaCadPromocao;