// src/screens/Home.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Z-
        <Text style={styles.green}>F</Text>
        it
      </Text>

      <Button title="Ir para Login" onPress={() => navigation.navigate("Login")} />
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
    marginBottom: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  green: {
    color: "#609346",
  },
});
