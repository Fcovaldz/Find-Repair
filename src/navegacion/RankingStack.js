import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ranking } from '../pantallas/Ranking';

import { pantalla } from '../utilidades';

const Stack = createNativeStackNavigator();

export function RankingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={pantalla.ranking.ranking}
                component={Ranking}
                options={{ title: "Ranking"}}
            />
        </Stack.Navigator>
    )
}
