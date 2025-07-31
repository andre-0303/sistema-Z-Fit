import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
import { useAuth } from "../context/AuthContext";
import { theme } from "../theme";
import { Button } from "../components/button";

export default function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    login({ email, senha });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // ajuste fino para iOS
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Z-
          <Text style={styles.green}>F</Text>
          IT
        </Text>

        <TextInput
          placeholder="Digite seu Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor={theme.colors.black}
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
          placeholderTextColor={theme.colors.black}
        />

        <View style={{ marginTop: 25, marginBottom: 30, width: "100%", alignItems: "center" }}>
          <Button title="Entrar" onPress={handleLogin} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: theme.colors.black,
  },
  input: {
    width: "90%",
    marginBottom: 20,
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    fontFamily: theme.fontFamily.extralight,
    fontSize: 13,
  },
  title: {
    fontSize: 70,
    marginBottom: 10,
    color: "#fff",
    fontFamily: theme.fontFamily.extrabold,
  },
  green: {
    color: theme.colors.green,
  },
});
