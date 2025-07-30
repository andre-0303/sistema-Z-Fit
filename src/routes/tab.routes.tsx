import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import Configuracoes from "../screens/Configuracoes";
import VerAluno from "../screens/VerAluno";
import CriarAluno from "../screens/CadastroAluno";

import {Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />
      }} />
      <Tab.Screen name="Ver Aluno" component={VerAluno} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => <Feather name="clipboard" color={color} size={size} />
      }} />
      <Tab.Screen name="Criar Aluno" component={CriarAluno} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => <Feather name="plus-circle" color={color} size={size} />
      }} />
      <Tab.Screen name="Configurações" component={Configuracoes} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => <Feather name="settings" color={color} size={size} />
      }}/>
    </Tab.Navigator>
  );
}