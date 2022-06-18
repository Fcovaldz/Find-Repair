import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { pantalla } from '../utilidades';
import { Icon } from 'react-native-elements';
//import { ContratistasScreen } from '../pantallas/ContratistasScreen';
//import { ContratistasStack } from './ContratistasStack';

//import { Cuenta } from '../pantallas/Cuenta';

import { ContratistasStack } from './ContratistasStack';
import { RankingStack } from './RankingStack';
import { BuscadorStack } from './BuscadorStack';
import { CuentaStack } from './CuentaStack';

//import { Ranking } from '../pantallas/Ranking';
//import { Buscador } from '../pantallas/Buscador';



const Tab = createBottomTabNavigator();

export function AppNavegacion() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({ color, size }) => screenOptions( route, color, size)
        })}>
            <Tab.Screen
            name={pantalla.contratista.tab}
            component={ContratistasStack}
            options={{ title: "Contratistas"}}
            />
           
    
            <Tab.Screen
            name={pantalla.ranking.tab}
            component={RankingStack}
            options={{ title: "Ranking"}}
            />
           
            <Tab.Screen
            name={pantalla.buscador.tab}
            component={BuscadorStack}
            options={{ title: "Buscador"}}
            />
            <Tab.Screen
            name={pantalla.micuenta.tab}
            component={CuentaStack}
            options={{ title: "Cuenta"}}
            />
        </Tab.Navigator>
    )
}

function screenOptions(route, color, size) {
    let iconNombre;

    if(route.name === pantalla.contratista.tab) {
        iconNombre = "compass-outline";
    }
    if(route.name === pantalla.ranking.tab) {
        iconNombre = "star-outline";
    }
    if(route.name === pantalla.buscador.tab) {
        iconNombre = "magnify";
    }
    if(route.name === pantalla.micuenta.tab) {
        iconNombre = "home-outline";
    }

    return (
        <Icon type='material-community' name={iconNombre} color={color} size={size}/>
    );
}