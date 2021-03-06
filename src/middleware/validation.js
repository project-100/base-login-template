const validation = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property]);

    const isValid = error == null;

    if (isValid) {
      console.log({ value });
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      console.error('Validation Error -> ', message);
      res.status(422).json({ error: message });
    }
  };
};

export default validation;
