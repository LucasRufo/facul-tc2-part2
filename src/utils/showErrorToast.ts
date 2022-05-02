import { toast } from "react-toastify"

export const showErrorToast = (error: string) => {
  toast.error(error, {
    position: toast.POSITION.TOP_RIGHT
  });
}