import {
  ContactAction,
  ContactActionTypes,
  ContactState,
} from '../../../types/redux/contact-reducer-types';
import { contactReducer } from '../contactReducer';

const initialState: ContactState = {
  isEmailSending: false,
  isEmailSent: false,
  error: null,
};

describe('Contact Reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = contactReducer(undefined, {} as ContactAction);
    expect(newState).toStrictEqual(initialState);
  });

  test('should set isLoading flag while sending email on SEND_EMAIL', () => {
    const newState = contactReducer(initialState, {
      type: ContactActionTypes.SEND_EMAIL,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isEmailSending: true,
    });
  });

  test('should stop loading and set isEmailSent flag on successful EMAIL_WAS_SENT', () => {
    const newState = contactReducer(initialState, {
      type: ContactActionTypes.EMAIL_WAS_SENT,
      payload: true,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isEmailSending: false,
      isEmailSent: true,
    });
  });

  test('should stop loading and set error on  EMAIL_SEND_ERROR', () => {
    const newState = contactReducer(initialState, {
      type: ContactActionTypes.EMAIL_SEND_ERROR,
      payload: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isEmailSending: false,
      error: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
    });
  });
});
