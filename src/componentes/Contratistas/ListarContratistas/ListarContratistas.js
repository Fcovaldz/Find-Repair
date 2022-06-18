import React from 'react'
import { Text, Image } from "react-native-elements"
import { View, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './ListarContratistas.styles'
import { useNavigation } from '@react-navigation/native'
import { pantalla } from '../../../utilidades'


export function ListarContratistas(props) {
    const { contratistas } = props

    const navegacion = useNavigation();

    const irAperfilContraista = (contratista) => {
        navegacion.navigate(pantalla.contratista.contratist, { id: contratista.id })    
    }
  return (

      <FlatList
        showsVerticalScrollIndicator={false}
        data={contratistas}
        renderItem={(doc) => {
            const contratista = doc.item.data();
            
            return (
                <TouchableOpacity
                    onPress={() => irAperfilContraista(contratista)}>
                    <View
                            style={styles.contenido}
                    >
                            { /* Imagen */}
                            <Image
                                source={{ uri: contratista.images[0]}}
                                style={styles.imagen}
                            />
                        
                        <View>
                            <Text style={styles.nombre}>{contratista.nombre}</Text>
                            <Text style={styles.info}>{contratista.direccion}</Text>
                            <Text style={styles.info}>{contratista.descripcion}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
            )
        }}
        />
    
  )
}