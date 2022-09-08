import { toast } from 'react-toastify';

export const showToastError = (msg: string) => {
  toast.dismiss();
  toast.error(msg, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

export const showToastSuccess = (msg: string) => {
  toast.dismiss();
  toast.success(msg, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};
