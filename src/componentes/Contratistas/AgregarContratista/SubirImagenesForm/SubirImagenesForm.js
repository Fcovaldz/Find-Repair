import React, { useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { Icon, Avatar, Text } from "react-native-elements"
import { styles } from './SubirImagenesForm.styles';
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid} from 'uuid';
import { CargarModal } from '../../../Compartido';
import { map, filter } from 'lodash'

export function SubirImagenesForm(props) {
    const {formik} = props;
    const [cargando, setCargando] = useState(false)

    const abrirGaleria = async () => {
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if(!resultado.cancelled) {
          setCargando(true);
            cargarImagen(resultado.uri)
        }
    }

    const cargarImagen = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        const storage = getStorage();
        const storageRef = ref(storage, `contratistas/${uuid()}`)

        uploadBytes(storageRef, blob).then((snapshot) => {
          actualizarFotosContratista(snapshot.metadata.fullPath)
        });
    }

    const actualizarFotosContratista = async (imagePath) => {
      const storage = getStorage();
      const imagenRef = ref(storage, imagePath);

      const imagenUrl = await getDownloadURL(imagenRef)
      formik.setFieldValue("images", [...formik.values.images, imagenUrl]);
      setCargando(false);
    }

    const removerImagen = (img) => {
      Alert.alert(
        "Eliminar imagen",
        "¿Estás seguro de eliminar esta imagen?",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "Eliminar",
            onPress: () => {
              const resultado = filter(formik.values.images, (imagen) => imagen !== img
              );
              formik.setFieldValue("images", resultado)
            },
          },
        ],
        {cancelable: false}
      )
    }

  return (
    <>
      <ScrollView style={styles.verImagen} horizontal showsHorizontalScrollIndicator={false}>
          <Icon
            type='material-community'
            name='camera'
            color="#a7a7a7"
            containerStyle={styles.contenedorIcono}
            onPress={abrirGaleria}
          />

          {map(formik.values.images, (imagen) => (
            <Avatar
              key={imagen}
              source={{ uri: imagen}}
              containerStyle={styles.imagenStyle}
              onPress={() => removerImagen(imagen)}
            />
          ))}
      </ScrollView>
          <Text style={styles.error}>{formik.errors.images}</Text>
          <CargarModal show={cargando} text="Subiendo imagen"/>
    </>
  )
}