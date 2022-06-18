import React, { useState } from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { getAuth, updateProfile } from 'firebase/auth'
import { styles } from './InfoUsuario.styles'
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export function InfoUsuario(props) {
    const { setCargando, setCargandoTexto} = props;
    const { uid, photoURL, displayName, email } = getAuth().currentUser;
    const [avatar, setAvatar] = useState(photoURL)

    const cambiarAvatar = async () => {
       const resultado = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.All,
           allowsEditing: true,
           aspect: [4, 3]
       });
       if(!resultado.cancelled) subirImagen(resultado.uri)
    }

    const subirImagen = async (uri) => {
        setCargandoTexto("Actualizando imagen");
        setCargando(true)
        const response = await fetch(uri);
        const blob = await response.blob();

        const storage = getStorage();
        const storageRef = ref(storage, `avatar/${uid}`);
        uploadBytes(storageRef, blob).then((snapshot) => {
            actualizarPhotoURL(snapshot.metadata.fullPath);
        });
    }
    const actualizarPhotoURL = async (imagePath) => {
        const storage = getStorage();
        const imagenRef = ref(storage, imagePath);

        const imagenUrl = await getDownloadURL(imagenRef);

        const auth = getAuth();

        updateProfile(auth.currentUser, { photoURL: imagenUrl });

        setAvatar(imagenUrl)

        setCargando(false);
    }
  return (
    <View style={styles.contenido}>
      <Avatar
      size="large"
      rounded
      containerStyle={styles.avatar}
      icon={{type: "material", name: "person"}}
      source={{ uri: avatar}}
      >
          <Avatar.Accessory size={24} onPress={cambiarAvatar} />
      </Avatar>
      <View>
          <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
          <Text>{email}</Text>
      </View>
    </View>
  )
}