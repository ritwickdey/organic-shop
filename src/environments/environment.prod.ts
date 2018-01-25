import { fireBaseKey } from 'private/firebase-key';
export const environment = {
  production: true,
  firebase: {
    ...fireBaseKey
  }
};
