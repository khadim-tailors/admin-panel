import Swal from "sweetalert2";
export const Alert = (message, type) =>{
   return Swal.fire({
    icon: type,
    title: type === 'success' ? 'Success' : 'Oops...',
    text: message,
  })
}