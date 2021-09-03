import { Story } from '@storybook/react';
import ContactForm from './ContactForm';

export default {
  title: 'Portfolio/Form/ContactForm',
  component: ContactForm,
};

const Template: Story = (args) => <ContactForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
