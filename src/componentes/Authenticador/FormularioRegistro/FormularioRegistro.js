import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import Toast from 'react-native-toast-message'
import { useFormik } from "formik"
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { initialValues, validationSchema } from './FormularioRegistro.data'
import { styles } from './FormularioRegistro.styles'
import { pantalla } from '../../../utilidades'


export function FormularioRegistro() {

    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const navegacion = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth();
                await createUserWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                );
                navegacion.navigate(pantalla.micuenta.micuenta)
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "¡Error!. Ya existe registrado un usuario con esta cuenta"
                });
                console.log(error)
                
            }
        }
    });

    const mostrarContraseñaOculta = () => setMostrarContraseña((prevEstado) => !prevEstado);
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
             <Input
                placeholder='Confirmar Contraseña'
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
                onChangeText={(text) => formik.setFieldValue("confirmarPassword", text)}
                errorMessage={formik.errors.confirmarPassword}
            />
            <Button
                title="Crear cuenta" 
                containerStyle={styles.btnContenedor} 
                buttonStyle={styles.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}