import Joi from 'joi';

const validation = (schema, property) => {
  return (req, res, next) => {
    const { error } = Joi.validate(req.body, schema);

    const isValid = error == null;

    if (isValid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      console.log('error', message);
      res.status(422).json({ error: message });
    }
  };
};

export default validation;
