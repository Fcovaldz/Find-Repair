import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Buscador } from '../pantallas/Buscador';

import { pantalla } from '../utilidades';

const Stack = createNativeStackNavigator();

export function BuscadorStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={pantalla.buscador.buscador}
                component={Buscador}
                options={{ title: "Buscador"}}
            />
        </Stack.Navigator>
    )
}
