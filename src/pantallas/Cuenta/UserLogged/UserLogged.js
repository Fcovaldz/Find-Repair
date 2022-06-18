import React, { useState } from 'react'
import { View} from 'react-native'
import { InfoUsuario, CuentaOpciones } from '../../../componentes/Cuenta'
import { styles } from './UserLogged.styles'
import { Button } from 'react-native-elements'
import { getAuth, signOut } from 'firebase/auth'
import { CargarModal } from '../../../componentes'

export function UserLogged() {

  const [cargando, setCargando] = useState(false)
  const [cargandoTexto, setCargandoTexto] = useState("")

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  }

  return (
    <View style={styles.contenido}>
     <InfoUsuario setCargando={setCargando} setCargandoTexto={setCargandoTexto}/>
    <CuentaOpciones />
     <Button
     title="Cerrar sesión"
     buttonStyle={styles.btnLogout}
     titleStyle={styles.btnTexto}
     onPress={logout}
     />

     <CargarModal show={cargando} text={cargandoTexto}/>
    </View>
  )
}