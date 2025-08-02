import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontFamily: theme.fontFamily.bold,
    color: "#fff",
    marginBottom: 8,
    fontSize: 16,
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginRight: 16,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checked: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.green,
  },
  optionLabel: {
    color: "#fff",
    fontSize: 13,
    fontFamily: theme.fontFamily.extralight,
  },
});
