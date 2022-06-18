import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './AgregarContratista.styles'
import { InfoForm, SubirImagenesForm, ImagenContratista } from '../../../componentes/Contratistas/AgregarContratista'
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './AgregarContratista.data'
import { v4 as uuid } from 'uuid'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../utilidades'
import { useNavigation } from '@react-navigation/native';

export function AgregarContratista() {
  const navegacion = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValor) => {
      try {
        const nuevosDatos = formValor;
        nuevosDatos.id = uuid()
        nuevosDatos.createdAt = new Date();

        /* ===
        const myDb = doc(db, "contratistas", nuevosDatos.id)
        await setDoc(myDb, nuevosDatos)
        */

        await setDoc(doc(db, "contratistas", nuevosDatos.id), nuevosDatos);

        navegacion.goBack();
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImagenContratista formik={formik}/>
        <InfoForm formik={formik}/>
        <SubirImagenesForm formik={formik}/>
        <Button
          title="Registrarse como contratista"
          buttonStyle={styles.agregarContratista}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}/>
    </ScrollView>
  )
}
