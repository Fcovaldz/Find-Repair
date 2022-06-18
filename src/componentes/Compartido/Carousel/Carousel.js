import React from 'react'
import { View } from 'react-native'
import { styles } from './Carousel.styles'
import CarouselSnap from 'react-native-snap-carousel'
import { Image } from 'react-native-elements'

export function Carousel(props) {
    const { arrayImagenes, width, height } = props

    const renderItem = ({item}) => (
        <Image 
            source={{ uri: item}} style={{ height, width}}/>
    )
  return (
    <View style={styles.contenido}>
      <CarouselSnap
        layout='default'
        data={arrayImagenes}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}/>
    </View>
  )
}