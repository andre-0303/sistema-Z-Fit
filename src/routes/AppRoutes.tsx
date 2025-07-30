import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

import AuthRoutes from './auth.routes'
import TabRoutes from './tab.routes'

export default function AppRoutes() {
    const { isAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            {isAuthenticated ? <TabRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}