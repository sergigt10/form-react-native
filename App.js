import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {register} from './screens';
import {citas} from './screens';
import {StatusBar} from 'react-native';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'register'}>
                <Stack.Screen name="register" component={register} />
                <Stack.Screen name="citas" component={citas} />
            </Stack.Navigator>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                barStyle="light-content"
            />
        </NavigationContainer>
    );
};

export default App;
