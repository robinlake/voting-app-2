import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
  let errors = {};

  if(Validator.isNull(data.pollQuestion)) {
    errors.pollQuestion = 'Question is required';
  }

  if(Validator.isNull(data.answer1)) {
    errors.answer1 = 'At least 2 answers are required';
  }

  if(Validator.isNull(data.answer2)) {
    errors.answer2 = 'At least 2 answers are required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }
});

export default router;