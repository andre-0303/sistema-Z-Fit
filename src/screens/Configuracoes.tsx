import { View, Text, StyleSheet, Button } from "react-native";
import { useAuth } from "../context/AuthContext";
import { theme } from "../theme";
import { api } from "../services/api";

export default function Configuracoes() {

    const {logout} = useAuth();

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                    <Text style={styles.title}>
                      Z-
                      <Text style={styles.green}>F</Text>
                      IT
                    </Text>
                  </View>
            <Button title="Sair" onPress={logout} />
        </View>
    )
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
