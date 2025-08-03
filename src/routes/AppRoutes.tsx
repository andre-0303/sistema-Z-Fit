// src/routes/AppRoutes.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

import AuthRoutes from './auth.routes';
import AppStackRoutes from './app.stack'; 

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
