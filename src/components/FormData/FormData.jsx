import { memo, useCallback, useState } from 'react';
import update from 'immutability-helper';
import * as yup from 'yup';
import s from './FormData.module.scss';
import FormRegister from 'components/FormRegister';

const formSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  age: yup.number().required(),
});

const FormData = memo(() => {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    age: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    email: false,
    password: false,
    age: false,
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

  const onSubmit = useCallback(
    async event => {
      event.preventDefault();
      const isFormValid = await formSchema.isValid(values, {
        abortEarly: false,
      });

      if (isFormValid) {
        console.log('Form is legit');
      } else {
        formSchema.validate(values, { abortEarly: false }).catch(err => {
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
      />
    </div>
  );
});

export default FormData;
