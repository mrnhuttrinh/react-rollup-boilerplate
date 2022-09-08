import { showToastError } from './common';

export const showPendingConfirmation = (): void => {
  showToastError('You have pending confirmation');
};
