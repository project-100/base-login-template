import Joi from 'joi';

const schemas = {
  createUser: Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().min(6).lowercase().required(),
    password: Joi.string().min(7).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    username: Joi.string().min(5).max(30),
  }),
};

export default schemas;
