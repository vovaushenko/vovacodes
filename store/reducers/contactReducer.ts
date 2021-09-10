import {
  ContactAction,
  ContactActionTypes,
  ContactState,
} from '../../types/redux/contact-reducer-types';

const initialState: ContactState = {
  isEmailSending: false,
  isEmailSent: false,
  error: null,
};
/**
 *@function contactReducer
 *@param {ContactState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */

export const contactReducer = (
  state = initialState,
  action: ContactAction
): ContactState => {
  switch (action.type) {
    case ContactActionTypes.SEND_EMAIL:
      return { ...state, isEmailSending: true };

    case ContactActionTypes.EMAIL_WAS_SENT:
      return { ...state, isEmailSending: false, isEmailSent: true };

    case ContactActionTypes.EMAIL_SEND_ERROR:
      return { ...state, isEmailSending: false, error: action.payload };

    case ContactActionTypes.CLEAR_EMAIL_STATE:
      return { ...initialState };

    default:
      return state;
  }
};
