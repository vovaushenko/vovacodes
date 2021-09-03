import React from 'react';
import * as Styled from './FormikTextField.styles';
import { FieldHookConfig, useField } from 'formik';
import { MdInfoOutline } from 'react-icons/md';

export type Props = {
  type: string;
  placeholder: string;
} & FieldHookConfig<string>;

/**
 *@function FormikTextField
 *@param {string} placeholder - input placeholder
 *@param {string} type - input type
 *@param {props} props - rest of input props from Formik form
 *@returns {JSX.Element} - Rendered CardContent component
 */
const FormikTextField = ({
  placeholder,
  type,
  ...props
}: Props): JSX.Element => {
  const [field, meta] = useField<string>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <Styled.Container>
      <Styled.Input type={type} hasError={!!errorText} {...field} />
      <Styled.Label htmlFor={field.name} hasValue={field.value !== ''}>
        {placeholder}
      </Styled.Label>
      <Styled.Error hasError={!!errorText}>
        <MdInfoOutline className="icon" />
        {errorText}
      </Styled.Error>
    </Styled.Container>
  );
};

export default FormikTextField;
