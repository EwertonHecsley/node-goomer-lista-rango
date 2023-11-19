const joi = require('joi');

const schemaCadRest = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'Campo nome é obrigatorio.',
        'string.empty': 'Campo nome não pode ser vazio.'
    }),
    horario: joi.string().required().messages({
        'any.required': 'Campo horário é obrigatorio.',
        'string.empty': 'Campo horário não pode ser vazio.'
    }),
    cep: joi.required().messages({
        'any.required': 'Campo cep é obrigatorio.'
    })
});

module.exports = schemaCadRest