import { StyleSheet, Dimensions } from "react-native";

const widthPantalla = Dimensions.get("window").width

export const styles = StyleSheet.create({
    contenido: {
        marginBottom: 20
    },
    imagen: {
        height: 200,
        width: widthPantalla,

    }
});