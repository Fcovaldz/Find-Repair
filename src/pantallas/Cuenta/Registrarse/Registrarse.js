import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './Registrarse.styles'
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { FormularioRegistro } from '../../../componentes/Authenticador'

export function Registrarse() {
  return (
    <KeyboardAwareScrollView>
     <Image source={require("../../../../assets/img/Repair1.png")} style={styles.imagen}/>
      <View style={styles.contenido}>
        <FormularioRegistro />
      </View>
    </KeyboardAwareScrollView>
    
  )
}