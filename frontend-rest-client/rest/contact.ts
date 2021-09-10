import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';
import { ContactFormData } from '../../types/redux/contact-reducer-types';

/**
 *@api will make POST request to /contact, thereby sending email via sendgrid
 *@function sendEmail
 *@returns {object} - promise with success status
 */
export const sendEmailWith = (
  contactFormData: ContactFormData
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/contact',
    method: 'POST',
    data: contactFormData,
    headers: { 'Content-Type': 'application/json' },
  });
};
