import s from './FormRegister.module.scss';
import { memo } from 'react';

import FormField from 'components/FormField';
import Button from 'components/Button';

const FormRegister = memo(props => (
  <form onSubmit={props.onSubmit} noValidate>
    <FormField
      key="name"
      labelText="Name"
      fieldType="text"
      fieldName="name"
      fieldValue={props.values.name}
      hasError={props.errors.name}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <FormField
      key="surname"
      labelText="Surname"
      fieldType="text"
      fieldName="surname"
      fieldValue={props.values.surname}
      hasError={props.errors.surname}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <FormField
      key="age"
      labelText="Age"
      fieldType="number"
      fieldName="age"
      fieldValue={props.values.age}
      hasError={props.errors.age}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <FormField
      key="email"
      labelText="Email"
      fieldType="email"
      fieldName="email"
      fieldValue={props.values.email}
      hasError={props.errors.email}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <FormField
      key="password"
      labelText="Password"
      fieldType="password"
      fieldName="password"
      fieldValue={props.values.password}
      hasError={props.errors.password}
      onFieldChange={props.onFieldChange}
      fieldSize="big"
    />

    <Button type="submit" text="Send" name="add" />
  </form>
));

export default FormRegister;
