// src/routes/app.stack.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import EditarAluno from "../screens/EditarAluno";
import { theme } from "../theme";

const Stack = createNativeStackNavigator();

export default function AppStackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen
        name="EditarAluno"
        component={EditarAluno}
        options={{
            headerShown: true,
            title: "Editar Aluno",
            headerStyle: { backgroundColor: theme.colors.black },
            headerTintColor: theme.colors.white,
        }}
    />
    </Stack.Navigator>
  );
}
