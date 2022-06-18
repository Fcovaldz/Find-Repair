import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements';
import { styles } from './FormIniciarSesion.styles'
import { initialValues, validationSchema } from './FormIniciarSesion.data'
import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { pantalla } from '../../../utilidades';
import { useNavigation } from '@react-navigation/native'

export function FormIniciarSesion() {

    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const mostrarContraseñaOculta = () => setMostrarContraseña((prevEstado) => !prevEstado);
    const navegacion = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                );
                navegacion.navigate(pantalla.micuenta.micuenta)
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Usuario o contraseña incorrectos"
                });
            }
        }
    });


  return (
    <View style={styles.contenido}>
        <Input
        placeholder='Correo electronico'
        containerStyle={styles.input}
        rightIcon={
            <Icon
                type='material-community'
                name='at'
                iconStyle={styles.icon}
            />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
        />
        <Input
        placeholder='Contraseña'
        containerStyle={styles.input}
        secureTextEntry={mostrarContraseña ? false : true}
        rightIcon={
            <Icon
                type='material-community'
                name={mostrarContraseña ? 'eye-off-outline' : 'eye-outline'}
                iconStyle={styles.icon}
                onPress={mostrarContraseñaOculta}
            />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
        />
        <Button
        title="Iniciar sesión"
        containerStyle={styles.btnLogin}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        />
    </View>
  )
}