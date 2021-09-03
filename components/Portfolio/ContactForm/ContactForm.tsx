import React, { useState } from 'react';
import * as Styled from './ContactForm.styles';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormikTextField from '../FormikTextField/FormikTextField';
import ActionButton from '../ActionButton/ActionButton';
import { FiSend } from 'react-icons/fi';

const validationSchema = yup.object({
  name: yup.string().required('Please introduce Yourself'),
  email: yup.string().email('Email is incorrect').required('Please add email'),
  message: yup.string().required('Please leave some message'),
});

/**
 *Renders contact form where user can send a message
 *@function ContactForm
 *@returns {JSX.Element} - Rendered ContactForm component
 */
const ContactForm = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Styled.Container>
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={async (data) => {
          setIsLoading(true);
          const { name, email, message } = data;
          console.log(isLoading);
          alert(`Hello ${name}. Your email is ${email}. ${message}`);
          //TODO: When backend will be ready, actually send email
          setIsLoading(false);
        }}
      >
        <Form>
          <Styled.Wrapper>
            <FormikTextField placeholder="name" name="name" type="text" />
            <FormikTextField placeholder="email" name="email" type="text" />
          </Styled.Wrapper>
          <FormikTextField placeholder="message" name="message" type="text" />
          <ActionButton
            buttonText={'Shoot'}
            icon={<FiSend className={'action-icon'} />}
          />
        </Form>
      </Formik>
    </Styled.Container>
  );
};

export default ContactForm;
