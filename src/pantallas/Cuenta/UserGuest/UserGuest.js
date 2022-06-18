import React from 'react'
import { ScrollView } from 'react-native'
import { Text, Button, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native' 
import { styles } from './UserGuest.styles'
import { pantalla } from '../../../utilidades'

export function UserGuest() {
  const navegacion = useNavigation();

  const irAIniciarSesion = () => {
    navegacion.navigate(pantalla.micuenta.iniciarSesion);
  }
  return (
    <ScrollView centerContent={true} style={styles.contenido}>
      <Image source={require("../../../../assets/img/servicio-reparacion.png")} style={styles.imagen} />
      <Text style={styles.titulo}>
        Consulta tu perfil de REPARAMAX
      </Text>
      <Text style={styles.descripcion}>
      ¿Necesitas reparacion efectiva y de confianza?
      ¿Estas cansado de que te salga mas caro al reparar?
      ¡Encuentra con nosotros a un profesional que pueda repararlo!.
      </Text>

       <Button title="Ir a mi cuenta" onPress={irAIniciarSesion} buttonStyle={styles.botonEstilo} />
   
    </ScrollView>
  )
}