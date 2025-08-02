import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { api } from "../services/api";
import { theme } from "../theme";

export default function CriarAluno() {
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Z-
          <Text style={styles.green}>F</Text>
          IT
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontFamily: theme.fontFamily.extrabold,
    marginLeft: 10
  },
  green: {
    color: theme.colors.green,
  }
});

