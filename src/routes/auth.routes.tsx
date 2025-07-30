import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from "../screens/Home";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{title: ''}}/>
        </Stack.Navigator>
    )
}