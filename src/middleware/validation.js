const validation = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property]);
    console.log(req.body);

    const isValid = error == null;

    if (isValid) {
      console.log({ value });
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
