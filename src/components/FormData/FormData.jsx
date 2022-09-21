import { memo, useCallback, useState } from 'react';
import update from 'immutability-helper';
import s from './FormData.module.scss';
import FormRegister from 'components/FormRegister';
import {
  checkAgeUser,
  createUser,
  loginUser,
  findByEmailUser,
  logoutUser,
} from 'services/api';
import { toast } from 'react-toastify';
import schemas from './schemas';

const FormData = memo(({ type }) => {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    age: false,
    email: false,
    password: false,
  });

  const onFieldChange = useCallback((fieldName, value) => {
    setValues(prevValues =>
      update(prevValues, {
        [fieldName]: {
          $set: value,
        },
      })
    );
  }, []);
  // const onFieldReset = () => {
  //   const keys = Object.keys(values);
  //   for (const key of keys) {
  //     setValues((values[key] = ''));
  //   }
  //   console.log(values);
  // };

  const onSubmit = useCallback(
    async event => {
      event.preventDefault();
      if (type === 'checkAge') {
        const isFormValid = await schemas.checkAge.isValid(
          {
            name: values.name,
            surname: values.surname,
            age: Number(values.age),
          },
          {
            abortEarly: false,
          }
        );
        console.log(isFormValid);
        if (isFormValid) {
          const result = await checkAgeUser({
            name: values.name,
            surname: values.surname,
            age: Number(values.age),
          });
          toast.success(result.message);
        }
      }
      if (type === 'register') {
        const isFormValid = await schemas.register.isValid(values, {
          abortEarly: false,
        });
        if (isFormValid) {
          const result = await createUser({
            ...values,
            age: Number(values.age),
          });
          toast.success(result.message);
        }
      }
      if (type === 'login') {
        const isFormValid = await schemas.login.isValid(values, {
          abortEarly: false,
        });
        if (isFormValid) {
          await loginUser({
            email: values.email,
            password: values.password,
          });
          toast.success('You have logged');
        }

        // onFieldReset();
      } else {
        schemas[type].validate(values, { abortEarly: false }).catch(err => {
          const errors = err.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: true,
            };
          }, {});

          setErrors(prevErrors =>
            update(prevErrors, {
              $set: errors,
            })
          );
        });
      }
    },
    [values]
  );
  return (
    <div className={s.wrapper}>
      <FormRegister
        values={values}
        errors={errors}
        onFieldChange={onFieldChange}
        onSubmit={onSubmit}
        type={type}
      />
    </div>
  );
});

export default FormData;
