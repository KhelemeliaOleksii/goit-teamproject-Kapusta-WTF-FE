import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const warning = (msg) => {
  toast.warn(msg);
};

const success = (msg) => {
  toast.success(msg);
};

const error = (msg) => {
  toast.error(msg);
};

const info = (msg) => {
  toast.info(msg);
};

const notifier = {
  warning,
  success,
  error,
  info,
};
export default notifier;
