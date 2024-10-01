import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from './routes';
import { navigatorScreenOptions } from '../data';
import { RouteModel } from '../models';

const Stack = createStackNavigator();

const RoutesContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator {...navigatorScreenOptions}>
                {routes?.map((item: RouteModel) => (
                    <Stack.Screen {...item} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RoutesContainer;
