import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Destacados } from '../pantallas/Contratistas/Destacados';
import { AgregarContratista } from '../pantallas/Contratistas/AgregarContratista'

import { pantalla } from '../utilidades';

const Stack = createNativeStackNavigator();

export function DestacadosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={pantalla.destacado.destacado}
                component={Destacados}
                options={{ title: "Contratistas"}}
            />
            <Stack.Screen
                name={pantalla.destacado.agregarContratista}
                component={AgregarContratista}
                options={{ title: "Agregar Contratistas"}}
            />
        </Stack.Navigator>
    )
}
