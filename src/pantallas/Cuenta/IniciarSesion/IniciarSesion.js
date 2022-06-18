import React from 'react';
import { View, ScrollView} from 'react-native';
import { Text, Image } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { pantalla } from '../../../utilidades';
import { styles } from './IniciarSesion.styles';
import { FormIniciarSesion } from '../../../componentes/Authenticador/FormIniciarSesion';

export function IniciarSesion() {

  const navegacion = useNavigation();

  const irAregistrarse = () => {
    navegacion.navigate(pantalla.micuenta.registrarse);
  }
  return (
    <ScrollView>
      <Image source={require("../../../../assets/img/reparamax.png")} style={styles.imagen}/>
      <View style={styles.contenido}>
        <FormIniciarSesion />
        <Text style={styles.textRegistro}>
          ¿Aun no tienes una cuenta? {" "}
          <Text style={styles.btnRegistro} onPress={irAregistrarse}>
            Regístrarse
          </Text>
        </Text>
      </View>
    </ScrollView>
  )
}