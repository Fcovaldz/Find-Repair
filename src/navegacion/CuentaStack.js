import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Cuenta } from '../pantallas/Cuenta/Cuenta';
import { IniciarSesion } from '../pantallas/Cuenta/IniciarSesion/IniciarSesion'
import { Registrarse } from '../pantallas/Cuenta/Registrarse/Registrarse';
import { pantalla } from '../utilidades';

const Stack = createNativeStackNavigator();

export function CuentaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={pantalla.micuenta.micuenta}
                component={Cuenta}
                options={{ title: "Cuenta"}}
            />
            <Stack.Screen
                name={pantalla.micuenta.iniciarSesion}
                component={IniciarSesion}
                options={{ title: "Iniciar Sesión"}}
            />
            <Stack.Screen
                name={pantalla.micuenta.registrarse}
                component={Registrarse}
                options={{ title: "Registrarse"}}
            />
        </Stack.Navigator>
    )
}
