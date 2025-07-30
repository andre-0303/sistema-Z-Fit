import React from "react";
import { View, Button } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <View>
      <Button title="Entrar" onPress={login} />
    </View>
  );
}

    