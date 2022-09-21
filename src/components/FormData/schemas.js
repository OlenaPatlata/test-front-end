import * as yup from 'yup';

const checkAge = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().required(),
});

const register = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  age: yup.number().required(),
});

const login = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});


const schemas = {
  checkAge,
  register,
  login
}
export default schemas;