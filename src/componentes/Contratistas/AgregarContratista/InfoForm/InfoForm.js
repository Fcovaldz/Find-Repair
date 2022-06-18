import React, { useState } from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import { MapForm } from '../MapForm';
import { styles } from './InfoForm.styles'

export function InfoForm(props) {
    const { formik } = props;
    const [mostrarMap, setMostrarMap] = useState(false)
    const abrirYcerrarMap = () => setMostrarMap((prevEstado) => !prevEstado);
  return (
    <>
    <View style={styles.contenido}>
      <Input
      placeholder='Nombre Completo'
      onChangeText={(text) => formik.setFieldValue("nombre", text)}
      errorMessage={formik.errors.nombre}
      />
      <Input
      placeholder='RFC'
      onChangeText={(text) => formik.setFieldValue("rfc", text)}
      errorMessage={formik.errors.rfc}
      />
      <Input
      placeholder='Dirección'
      rightIcon={{
        type: "material-community",
        name: "map-marker-radius",
        color: getColorIconMap(formik),
        onPress: abrirYcerrarMap
      }}
      onChangeText={(text) => formik.setFieldValue("direccion", text)}
      errorMessage={formik.errors.direccion}
      />
      <Input
      placeholder='Correo electronico'
      onChangeText={(text) => formik.setFieldValue("email", text)}
      errorMessage={formik.errors.email}
      />
      <Input
      placeholder='Telefono'
      onChangeText={(text) => formik.setFieldValue("telefono", text)}
      errorMessage={formik.errors.telefono}
      />
      <Input
      placeholder='Descripcion de servicios'
      multiline={true}
      inputContainerStyle={styles.textArea}
      onChangeText={(text) => formik.setFieldValue("descripcion", text)}
      errorMessage={formik.errors.descripcion}
      />
    </View>
    <MapForm show={mostrarMap} close={abrirYcerrarMap} formik={formik}/>
    </>
  )
}

const getColorIconMap = (formik) => {
  if(formik.errors.location) return "#ff0000";
  if(formik.values.location) return "#00a680";
  return "#c2c2c2";
}