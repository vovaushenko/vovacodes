import { Story } from '@storybook/react';
import React from 'react';
import FormikTextField, { Props } from './FormikTextField';
import { Form, Formik } from 'formik';

export default {
  title: 'Portfolio/Form/text-field',
  component: FormikTextField,
};

const Template: Story<Props> = (args) => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    onSubmit={() => console.log('boom')}
  >
    <Form>
      <FormikTextField {...args} />
    </Form>
  </Formik>
);
export const TextControl = Template.bind({});
TextControl.args = {
  name: 'name',
  type: 'text',
  placeholder: 'Name',
};
export const EmailControl = Template.bind({});
EmailControl.args = {
  name: 'email',
  type: 'email',
  placeholder: 'Email',
};
export const PasswordControl = Template.bind({});
PasswordControl.args = {
  name: 'password',
  type: 'password',
  placeholder: 'Password',
};
