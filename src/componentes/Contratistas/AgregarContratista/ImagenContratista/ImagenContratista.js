import React from 'react'
import { View } from 'react-native'
import { styles } from './ImagenContratista.styles'
import { Image } from 'react-native-elements'

export function ImagenContratista(props) {
    const {formik} = props;

    const primeraImagen = formik.values.images[0]
  return (
    <View
        style={styles.contenido}
    >
      <Image
        source={primeraImagen ? { uri: primeraImagen} : require("../../../../../assets/img/notfound.png")}
        style={styles.imagen}
      />
    </View>
  )
}