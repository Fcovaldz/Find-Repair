import React from 'react';
import { View, ScrollView} from 'react-native';
import { Text, Image, Input, Icon, Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { pantalla } from '../../../utilidades';
import { styles } from './IniciarSesion.styles';

export function IniciarSesion() {

  const navegacion = useNavigation();

  const irAregistrarse = () => {
    navegacion.navigate(pantalla.micuenta.registrarse);
  }
  return (
    <ScrollView>
      <Image source={require("../../../../assets/img/guest-account.png")} style={styles.imagen}/>
      <View>
        
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
            />
             <Input
                placeholder='Contraseña'
                containerStyle={styles.input}
                secureTextEntry={true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name='eye-outline'
                        iconStyle={styles.icon}
                    />
                }
            />
             <Button
                title="Crear cuenta" 
                containerStyle={styles.btnContenedor} 
                buttonStyle={styles.btn}
            />
            <Text onPress={irAregistrarse} style={styles.contenido}>
          ¿No tienes una cuenta? Registrate
        </Text>
      </View>
    </ScrollView>
  )
}