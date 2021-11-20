const joi = require('joi');

const UsuarioValidator = {
  registerValidator: (data) => {
    const validateSchema = joi.object({
      username: joi.string()
        .min(6)
        .required(),
      email: joi.string()
        .min(6)
        .required()
        .email(),
      password: joi.string()
        .min(6)
        .required(),
    });

    return validateSchema.validateAsync(data);
  },
};

module.exports = UsuarioValidator;