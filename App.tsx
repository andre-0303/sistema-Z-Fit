import React from "react";
import {useFonts, Montserrat_700Bold, Montserrat_800ExtraBold , Montserrat_900Black, Montserrat_200ExtraLight, Montserrat_500Medium, Montserrat_100Thin} from '@expo-google-fonts/montserrat'
import { AuthProvider } from "./src/context/AuthContext";
import AppRoutes from "./src/routes/AppRoutes";
import { Loading } from "./src/components/loading";

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_500Medium,
    Montserrat_900Black,
    Montserrat_800ExtraBold,
    Montserrat_700Bold
  })

  if(!fontsLoaded) {
    return <Loading/>
  }

  return (
   <AuthProvider>
    <AppRoutes/>
   </AuthProvider>
  );
}

