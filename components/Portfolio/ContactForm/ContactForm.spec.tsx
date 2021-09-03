import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../../test/testUtils';
import ContactForm from './ContactForm';
import FormikTextField from '../FormikTextField/FormikTextField';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<ContactForm />));
};

describe('ContactForm', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render formik form', () => {
    const formik = wrap.find('form');
    expect(formik.length).toBe(1);
  });
  it('should render three text fields', () => {
    const textField = wrap.find(FormikTextField);
    expect(textField.length).toBe(3);
  });
});
