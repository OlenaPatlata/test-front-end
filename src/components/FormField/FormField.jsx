import { memo, useCallback } from 'react';
import s from './FormField.module.scss';

const FormField = memo(props => {
  const onFieldChange = useCallback(
    event => {
      props.onFieldChange(props.fieldName, event.target.value);
    },
    [props.onFieldChange, props.fieldName]
  );

  return (
    <fieldset className={s[props.fieldSize]} style={props.fieldStyle}>
      <label htmlFor={props.fieldName}>{props.labelText}</label>

      <input
        type={props.fieldType}
        name={props.fieldName}
        id={props.fieldName}
        onChange={onFieldChange}
        value={props.fieldValue}
      />

      {props.hasError && (
        <p
          className={s.error}
        >{`Please fill in correct value for "${props.labelText}".`}</p>
      )}
    </fieldset>
  );
});

export default FormField;
