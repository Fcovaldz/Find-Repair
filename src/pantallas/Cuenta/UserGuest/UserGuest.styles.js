import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenido: {
        marginHorizontal: 30,

    },
    imagen: {
        resizeMode: "contain",
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    },
    descripcion: {
        textAlign: "center",
        marginBottom: 20
    },
    botonEstilo: {
        backgroundColor: "#00a680"
    }
});