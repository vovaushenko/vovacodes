export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactState {
  isEmailSent: boolean;
  isEmailSending: boolean;
  error: null | string;
}

export enum ContactActionTypes {
  SEND_EMAIL = 'SEND_EMAIL',
  EMAIL_WAS_SENT = 'EMAIL_WAS_SENT',
  EMAIL_SEND_ERROR = 'EMAIL_SEND_ERROR',
  CLEAR_EMAIL_STATE = 'CLEAR_EMAIL_STATE',
}

export type ContactAction =
  | { type: ContactActionTypes.SEND_EMAIL }
  | { type: ContactActionTypes.EMAIL_WAS_SENT; payload: boolean }
  | { type: ContactActionTypes.EMAIL_SEND_ERROR; payload: string }
  | { type: ContactActionTypes.CLEAR_EMAIL_STATE };
