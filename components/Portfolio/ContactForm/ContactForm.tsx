import React from 'react';
import * as Styled from './ContactForm.styles';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormikTextField from '../FormikTextField/FormikTextField';
import ActionButton from '../ActionButton/ActionButton';
import { FiSend } from 'react-icons/fi';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const validationSchema = yup.object({
  name: yup.string().required('Please introduce Yourself'),
  email: yup.string().email('Email is incorrect').required('Please add email'),
  message: yup.string().required('Please leave some message'),
});

/**
 *Renders contact form for sending messages
 *@function ContactForm
 *@returns {JSX.Element} - Rendered ContactForm component
 */
const ContactForm = (): JSX.Element => {
  const { sendEmailViaSendgrid } = useActions();
  const { isEmailSending, isEmailSent } = useTypedSelector(
    (state) => state.contact
  );

  return (
    <Styled.Container>
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={async (data) => {
          sendEmailViaSendgrid(data);
        }}
      >
        <Form>
          <Styled.Wrapper>
            <FormikTextField placeholder="name" name="name" type="text" />
            <FormikTextField placeholder="email" name="email" type="text" />
          </Styled.Wrapper>
          <FormikTextField placeholder="message" name="message" type="text" />
          <ActionButton
            buttonText={isEmailSent ? 'Sent 👍' : 'Shoot'}
            icon={<FiSend className={'action-icon'} />}
            isLoading={isEmailSending}
            disabled={isEmailSent}
            type="submit"
          />
        </Form>
      </Formik>
    </Styled.Container>
  );
};

export default ContactForm;
