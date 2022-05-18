import * as Yup from "yup"

export function initialValues() {
    return {
        email: "",
        password: "",
        confirmarPassword: ""
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("Correo electronico invalido").required("Correo electronico obligatorio"),
        password: Yup.string().required("Contraseña obligatoria"),
        confirmarPassword: Yup.string().required("Contraseña obligatoria").oneOf([Yup.ref("password")], "No coinciden l contraseñas")
    })
}