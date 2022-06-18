import React, { useState, useEffect } from 'react'
import { ScrollView, Dimensions } from 'react-native'
import { styles } from './PantallaContratista.styles'
import { doc, onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';
import { Carousel } from '../../../componentes/Compartido';
import { db } from '../../../utilidades'

const { width } = Dimensions.get("window")

export function PantallaContratista(props) {
  const { route } = props

  const [contratista, setContratista] = useState(null)

  useEffect(() => {
    setContratista(null)
    onSnapshot(doc(db, "contratistas", route.params.id), (doc) =>{
      setContratista(doc.data())
    })
  }, [route.params.id])
  

  if(!contratista) return null;

  return (
    <ScrollView style={styles.contenido}>
      <Carousel 
        arrayImagenes={contratista.images}
        height={250}
        width={width}/>
    </ScrollView>
  )
}