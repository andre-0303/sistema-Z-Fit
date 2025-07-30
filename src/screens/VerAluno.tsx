import { View, Text, StyleSheet } from "react-native";

export default function VerAluno() {
    return (
        <View style={styles.container}>
            <Text>Ver aluno</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  }
});
