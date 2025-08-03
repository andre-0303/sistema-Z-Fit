import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { theme } from "../theme";
import { Feather } from "@expo/vector-icons";
import { Button } from "../components/button";

export default function Configuracoes() {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Z-<Text style={styles.green}>F</Text>IT
        </Text>
      </View>

      <View style={styles.configTitle}>
        <Feather name="settings" size={20} color={theme.colors.white} style={{ marginRight: 8 }} />
          <Text style={styles.configText}>Configurações</Text>
          </View>   


      <Text style={{ color: theme.colors.white, marginLeft: 10, fontFamily: theme.fontFamily.bold, marginTop: 10}}>Dados da academia</Text>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={{ color: theme.colors.black, fontFamily: theme.fontFamily.bold }}>
            Nome: <Text style={{ color: theme.colors.white, fontFamily: theme.fontFamily.bold }}>Z-Fit</Text>
          </Text>
        
          <Text style={{ color: theme.colors.black, fontFamily: theme.fontFamily.bold }}>
            Endereço: <Text style={{ color: theme.colors.white, fontFamily: theme.fontFamily.bold }}>Rua A, 123 - Centro</Text>
          </Text>
          <Text style={{ color: theme.colors.black, fontFamily: theme.fontFamily.bold }}>
            CNPJ: <Text style={{ color: theme.colors.white, fontFamily: theme.fontFamily.bold }}>12.345.678/0001-99</Text>
          </Text>
          
        </View>
      </View>
      
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Sair" onPress={logout} />
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
    marginLeft: 10,
  },
  green: {
    color: theme.colors.green,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20
  },
  card: {
    backgroundColor: "#609346",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    width: "100%",
    maxWidth: 320,
    gap: 5
  },
  configTitle: {
  flexDirection: "row",
  alignItems: "center",
  marginLeft: 10,
  marginBottom: 12,
},
configText: {
  color: theme.colors.white,
  fontFamily: theme.fontFamily.bold,
  fontSize: 16,
},

});
