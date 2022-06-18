import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mapStyle: {
        width: "100%",
        height: 550
    },
    mapAcciones: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },
    btnMapContenedorGuardar: {
        paddingRight: 5,
        width: "50%"
    },
    btnMapGuardar: {
        backgroundColor: "#00a680"
    },
    btnMapContenedorCancelar: {
        paddingLeft: 5,
        width: "50%"
    },
    btnMapCancelar: {
        backgroundColor: "#a60d0d"
    }
});