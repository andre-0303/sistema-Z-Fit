import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";
import { Button } from "../components/button";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Z-
        <Text style={styles.green}>F</Text>
        IT
      </Text>
      <Text style={styles.subtitle}>Controle total da sua academia, na palma da sua mão.</Text>

    <Button title="Começar" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 70,
    marginBottom: 10,
    color: "#fff",
    fontFamily: theme.fontFamily.extrabold
  },
  green: {
    color: theme.colors.green,
  },
  subtitle: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.extralight,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40
  },
  button: {
    backgroundColor: theme.colors.green,
    paddingVertical: 12,
    paddingHorizontal: 90,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: theme.fontFamily.medium
  },
});
