import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Contratistas } from '../pantallas/Contratistas/PantallaContratistas/Contratistas';
import { PantallaContratista } from '../pantallas/Contratistas/PantallaContratista'
import { AgregarContratista } from '../pantallas/Contratistas/AgregarContratista/AgregarContratista'

import { pantalla } from '../utilidades';

const Stack = createNativeStackNavigator();

export function ContratistasStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={pantalla.contratista.contratista}
                component={Contratistas}
                options={{ title: "Contratistas"}}
            />
            <Stack.Screen
                name={pantalla.contratista.agregarContratista}
                component={AgregarContratista}
                options={{ title: "Agregar Contratistas"}}
            />
            <Stack.Screen
                name={pantalla.contratista.contratist}
                component={PantallaContratista}
                options={{ title: "Contratista"}}
            />
        </Stack.Navigator>
    )
}

