import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './MapForm.styles'
import { Modal } from '../../../Compartido'
import * as Location from "expo-location"
import MapView from 'react-native-maps'
import { Toast } from 'react-native-toast-message'

export function MapForm(props) {
    const {show, close, formik} = props;
    const [location, setLocation] = useState({
        latitude: 0.001,
        longitude: 0.001,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    })

    useEffect(() => {
      (async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if(status !== "granted") {
              Toast.show({
                  type: "info",
                  position: "bottom",
                  text1: 'Ve a ajustes de la app y activar la localización'
              });
              return;
          }
          const locationTemp = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: locationTemp.coords.latitude,
            longitude: locationTemp.coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
        })
      })()
    }, []);

    const guardarLocacion = () => {
       formik.setFieldValue("location", location)
        close();
    }
    
  return (
    <Modal
        show={show}
        close={close}
    >
          <MapView
          initialRegion={location}
          showsUserLocation={true}
          style={styles.mapStyle}
          onRegionChange={(locationTemp) => setLocation(locationTemp)}
          >
            <MapView.Marker
                draggable 
                coordinate={location}/>
          </MapView>
        <View style={styles.mapAcciones}>
            <Button
                title='Guardar'
                containerStyle={styles.btnMapContenedorGuardar}
                buttonStyle={styles.btnMapGuardar}
                onPress={guardarLocacion}
            />
            <Button
                title='Cancelar'
                containerStyle={styles.btnMapContenedorCancelar}
                buttonStyle={styles.btnMapCancelar}
                onPress={close}
            />
        </View>
    </Modal>
  )
}