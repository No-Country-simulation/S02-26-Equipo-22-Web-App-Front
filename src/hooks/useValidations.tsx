import { FormErrors, FormValues } from "@/mock/mock";
import toast from "react-hot-toast";

const useValidations = (form: FormValues): FormErrors => {
    const errors: FormErrors = {};
  
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  
  
    if (!form.firstName.trim()) {
      // errors.firstName = "El campo 'Nombre' es requerido";
      toast.error("El campo 'Nombre' es requerido");
    } else if (!regexName.test(form.firstName.trim())) {
      errors.firstName = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
      toast.error("El campo 'Nombre' sólo acepta letras y espacios en blanco");
    }
  
    if (!form.secondSurname.trim()) {
      // errors.secondSurname = "El campo 'Apellido' es requerido";
      toast.error("El campo 'Apellido' es requerido");
    } else if (!regexName.test(form.secondSurname.trim())) {
      errors.secondSurname = "El campo 'Apellido' sólo acepta letras y espacios en blanco";
      toast.error("El campo 'Apellido' sólo acepta letras y espacios en blanco");
    }
  
    if (!form.email.trim()) {
      // errors.email = "El campo 'Email' es requerido";
      toast.error("El campo 'Email' es requerido");
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Completa correctamente el campo 'Email'";
      toast.error("El campo 'Email' es incorrecto");
    }
  
    if (!form.password) {
      // errors.password = "El campo 'Contraseña' es requerido";
      toast.error("El campo 'Contraseña' es requerido");
    } else if (form.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
      toast.error("La contraseña debe tener al menos 6 caracteres");
    }
  
    if (!form.secondPassword) {
      // errors.secondPassword = "El campo 'Repite la contraseña' es requerido";
      toast.error("El campo 'Repite la contraseña' es requerido");
    } else if (form.password !== form.secondPassword) {
      errors.secondPassword = "Las contraseñas no coinciden";
      toast.error("Las contraseñas no coinciden");
    }
  
    return errors;
  };
  export default useValidations