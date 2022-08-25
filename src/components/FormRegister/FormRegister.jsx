import s from './FormRegister.module.scss';
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormField from 'components/FormField';

const FormRegister = memo(props => (
  <form onSubmit={props.onSubmit} noValidate>
    <FormField
      key={uuidv4()}
      labelText="Name"
      fieldType="text"
      fieldName="name"
      fieldValue={props.values.name}
      hasError={props.errors.name}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <FormField
      key={uuidv4()}
      labelText="Surname"
      fieldType="text"
      fieldName="surname"
      fieldValue={props.values.surname}
      hasError={props.errors.surname}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <FormField
      key={uuidv4()}
      labelText="Age"
      fieldType="number"
      fieldName="age"
      fieldValue={props.values.age}
      hasError={props.errors.age}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <FormField
      key={uuidv4()}
      labelText="Email"
      fieldType="email"
      fieldName="email"
      fieldValue={props.values.email}
      hasError={props.errors.email}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <FormField
      key={uuidv4()}
      labelText="Password"
      fieldType="password"
      fieldName="password"
      fieldValue={props.values.password}
      hasError={props.errors.password}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <button type="submit">Send</button>
  </form>
));

export default FormRegister;
