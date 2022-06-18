import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem, Icon, Text } from 'react-native-elements'
import { map } from "lodash"
import { Modal } from "../../componentes/Compartido"

export function CuentaOpciones() {
    const [mostrarModal, setMostrarModal] = useState(false)
    const cerrarYabrirModal = () => setMostrarModal((prevEstado) => !prevEstado);
    const [renderModal, setRenderModal] = useState(null)

    const componenteSeleccionado = (key) => {
        if(key === "Nombre"){
            setRenderModal(<Text>Cambiar nombre y apellidos</Text>)
        }
        if(key === "Correo"){
            setRenderModal(<Text>Cambiar correo electronico</Text>)
        }
        if(key === "Contraseña"){
            setRenderModal(<Text>Cambiar contraseña</Text>)
        }
        cerrarYabrirModal();
    }
    const menuOpciones = getMenuOpciones(componenteSeleccionado);

  return (
    <View>
      {map(menuOpciones, (menu, index) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={menu.onPress}
            >
                <Icon
                type={menu.iconType}
                name={menu.iconNameLeft}
                color={menu.iconColorLeft}
                />
              <ListItem.Content>
                  <ListItem.Title>{menu.title}</ListItem.Title>
              </ListItem.Content>
              <Icon
                type={menu.iconType}
                name={menu.iconNameRight}
                color={menu.iconColorRight}
                />
          </ListItem>
      ))}
      <Modal
        show={mostrarModal}
        close={cerrarYabrirModal}
        >
         {renderModal}
      </Modal>
    </View>
  )
}

function getMenuOpciones(componenteSeleccionado){
    return [
        {
            title: "Cambiar Nombre y Apellidos",
            iconType: "material-community",
            iconNameLeft: "account-circle",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => componenteSeleccionado("Nombre")
        },
        {
            title: "Cambiar Correo Electronico",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => componenteSeleccionado("Correo")
        },
        {
            title: "Cambiar Contraseña",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => componenteSeleccionado("Contraseña")
        }
    ]
}