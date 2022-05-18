import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContratistasScreen } from '../pantallas/ContratistasScreen'
import { pantalla } from "../utilidades";

const Stack = createNativeStackNavigator();

export function ContratistasStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={pantalla.contratista.contratistasScreen}
                compontent={ContratistasScreen}
                options={{ title: "ContratistasScre"}}
            />
        </Stack.Navigator>
    );
}