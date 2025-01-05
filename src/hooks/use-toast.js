import { toast } from 'react-hot-toast';

export const useToast = () => {
  return {
    toast: (options) => toast(options.title || options.description),
  };
};
