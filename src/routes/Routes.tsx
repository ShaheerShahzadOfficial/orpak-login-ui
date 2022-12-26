import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../SignUp';
import Login from '../Login';
import LoginConfirmation from '../LoginConfirmation/LoginConfirmation';


const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
         <Stack.Navigator screenOptions={{
            headerShown: false
            
        }} initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="LoginConfirmation" component={LoginConfirmation}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}