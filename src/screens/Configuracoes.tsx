import { View, Text, StyleSheet, Button } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Configuracoes() {

    const {logout} = useAuth();

    return (
        <View style={styles.container}>
            <Text>Configurações</Text>
            <Button title="Sair" onPress={logout} />
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
