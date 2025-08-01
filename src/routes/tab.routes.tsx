import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import Configuracoes from "../screens/Configuracoes";
import VerAluno from "../screens/VerAluno";
import CriarAluno from "../screens/CadastroAluno";
import { theme } from "../theme";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.green,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderTopWidth: 0,
          height: 60 + insets.bottom, 
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10, 
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ver Aluno"
        component={VerAluno}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="clipboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Criar Aluno"
        component={CriarAluno}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
