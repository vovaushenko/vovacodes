import {
  ContactAction,
  ContactActionTypes,
  ContactFormData,
} from '../../types/redux/contact-reducer-types';
import { Dispatch } from 'redux';
import { sendEmailWith } from '../../frontend-rest-client/rest/contact';

/**
 *@Action creator, will dispatch action to send email via sendgrid, also will dispatch error action if async operation fails
 *@function loadAllReviews
 *@returns {function} - Redux thunk function
 */
export const sendEmailViaSendgrid = (contactFormData: ContactFormData) => {
  return async (dispatch: Dispatch<ContactAction>): Promise<void> => {
    dispatch({ type: ContactActionTypes.SEND_EMAIL });
    try {
      const { data } = await sendEmailWith(contactFormData);
      dispatch({
        type: ContactActionTypes.EMAIL_WAS_SENT,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: ContactActionTypes.EMAIL_SEND_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 * @CLEAR email state
 * @CLEAR operation statuses
 */
export const clearEmailState = () => {
  return async (dispatch: Dispatch<ContactAction>): Promise<void> => {
    dispatch({ type: ContactActionTypes.CLEAR_EMAIL_STATE });
  };
};
