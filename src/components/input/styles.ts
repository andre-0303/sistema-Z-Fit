// src/components/Input/styles.ts
import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontFamily: theme.fontFamily.bold,
    color: "#fff",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    padding: 12,
    color: "#fff",
    fontFamily: theme.fontFamily.extralight,
  },
  inputError: {
    borderColor: "#ff4d4d",
  },
  errorText: {
    marginTop: 4,
    color: "#ff4d4d",
    fontSize: 14,
  },
});
