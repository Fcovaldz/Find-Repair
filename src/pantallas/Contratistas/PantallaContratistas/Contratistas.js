import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { View, Text } from 'react-native'
import { Icon } from "react-native-elements";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { pantalla, db } from '../../../utilidades';
import { styles } from './Contratistas.styles'
import { CargarModal } from '../../../componentes/Compartido'
import { ListarContratistas } from '../../../componentes/Contratistas'

export function Contratistas(props) {
  const { navigation } = props;
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [contratistas, setContratistas] = useState(null)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (usuario) => {
      setUsuarioActual(usuario)
    })
  }, [])
  
  useEffect(() => {
    const q = query(collection(db, "contratistas"),
    orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      setContratistas(snapshot.docs)
    })
  }, [])
  

  const irAgregarContratista = () => {
    //navigation.navigate(pantalla.destacado.agregarContratista);
    navigation.navigate(pantalla.contratista.agregarContratista)
  };
  return (
    <View
      style={styles.contenido}
      >
        {!contratistas ? (
          <CargarModal
              show
              text="Cargando"
          />
        ) : (
          <ListarContratistas contratistas={contratistas} />

        )}
      {usuarioActual && (
        <Icon
        reverse
        type="material-community"
        name="plus"
        color="#00a680"
        containerStyle={styles.btnContenedor}
        onPress={irAgregarContratista}
      />
      )}
      
    </View>
  )
}
