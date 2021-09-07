import { mount } from 'enzyme';
import React from 'react';
import FormikTextField from './FormikTextField';
import { Form, Formik } from 'formik';
import { withReduxAndStyledProviders } from '../../../test/testUtils';

describe('Formik text control component', () => {
  const wrap = mount(
    withReduxAndStyledProviders(
      <Formik
        initialValues={{ email: '' }}
        onSubmit={() => console.log('boom')}
      >
        <Form>
          <FormikTextField
            placeholder={'email'}
            name={'email'}
            type={'email'}
          />
        </Form>
      </Formik>
    )
  );
  it('should render', () => {
    expect(wrap.length).toBe(1);
  });

  it('should render specified input name', () => {
    expect(wrap);
    expect(wrap.find('input').prop('name')).toBe('email');
  });
  it('should render specified input type', () => {
    expect(wrap.find('input').prop('type')).toBe('email');
  });
  it('should render specified input placeholder', () => {
    const placeholder = wrap.find('label');
    expect(placeholder.text()).toBe('email');
  });
});
