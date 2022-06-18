import * as Yup from "yup";

export function initialValues() {
    return {
        nombre: "",
        rfc: "",
        direccion: "",
        email: "",
        telefono: "",
        descripcion: "",
        location: null,
        images: []
    };
}

export function validationSchema() {
    return Yup.object({
        nombre: Yup.string().required("Campo obligatorio*"),
        rfc: Yup.string().required("Campo obligatorio*"),
        direccion: Yup.string().required("Campo obligatorio*"),
        email: Yup.string().email("No es un email valido").required("Campo obligatorio*"),
        telefono: Yup.string().required("Campo obligatorio*"),
        descripcion: Yup.string().required("Campo obligatorio*"),
        location: Yup.object().required("La localizacion es obligatoria*"),
        images: Yup.array().min(1, "Se requere mínimo una imagen").required("La imagen es requerida*")
    })
}