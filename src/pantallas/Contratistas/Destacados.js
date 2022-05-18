import { View, Text } from 'react-native'
import React from 'react'
import { Button } from "react-native-elements"
import { pantalla } from '../../utilidades';

export function Destacados(props) {
  const { navigation } = props;

  const irAgregarContratista = () => {
    //navigation.navigate(pantalla.destacado.agregarContratista);
    navigation.navigate(pantalla.micuenta.tab, { pantalla: pantalla.micuenta.micuenta})
  };
  return (
    <View>
      <Text>Contratistas</Text>
      <Button title="Crear Contratista" onPress={irAgregarContratista}></Button>
    </View>
  )
}