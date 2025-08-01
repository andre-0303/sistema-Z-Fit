import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { api } from "../services/api";
import { Loading } from "../components/loading";
import { theme } from "../theme";

type Resumo = {
  total: number,
  ativos: number,
  inativos: number,
  vencidos: number
}

export default function Dashboard() {
  const [resumo, setResumo] = useState<Resumo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Resumo>('/alunos/dashboard/resumo')
      .then(({ data }) => setResumo(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  if (!resumo)
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Erro ao carregar dados</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Z-
          <Text style={styles.green}>F</Text>
          IT
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}><Text style={styles.number}>{resumo.total}</Text><Text style={{color: theme.colors.white, fontFamily: theme.fontFamily.extralight}}>Total de alunos</Text></View>
        <View style={styles.card}><Text style={styles.number}>{resumo.ativos}</Text><Text style={{color: theme.colors.white, fontFamily: theme.fontFamily.extralight}}>Ativos</Text></View>
        <View style={styles.card}><Text style={styles.number}>{resumo.inativos}</Text><Text style={{color: theme.colors.white, fontFamily: theme.fontFamily.extralight}}>Inativos</Text></View>
        <View style={styles.card}><Text style={styles.number}>{resumo.vencidos}</Text><Text style={{color: theme.colors.white, fontFamily: theme.fontFamily.extralight}}>Vencidos</Text></View>
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
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },

  card: {
    backgroundColor: "#609346",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    width: "100%",
    maxWidth: 300,
  },
  number: {
    fontSize: 22,
    color: "#fff",
    fontFamily: theme.fontFamily.bold,
    marginBottom: 4,
  },
  error: {
    color: "red",
  },
});

