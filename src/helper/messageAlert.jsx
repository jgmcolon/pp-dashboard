import Swal from "sweetalert2";

export const messageAlert = ({
  icon = "error",
  title = "ProPlanner Dashboard",
  text = "",
  timer = 4500,
  timerProgressBar = true,
  imageUrl = "/logo.png",
  imageAlt = "Loading...",
  imageHeight = 48,
  toast = false,
  confirmButtonColor = '#1f4bbc',
  confirmButtonText = 'OK',
  ...rest
}) => {
  return Swal.fire({
    icon,
    title,
    html: text,
    //timer,
    timerProgressBar,
    imageUrl,
    imageAlt,
    imageHeight,
    toast,
    confirmButtonColor,
    confirmButtonText,
    ...rest,
  });
};

