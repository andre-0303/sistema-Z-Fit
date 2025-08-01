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
    .then(({data}) => setResumo(data))
    .catch(console.error)
    .finally(() => setLoading(false))
  }, []);

  if(loading) return <Loading/>

  if(!resumo) return <View style={styles.container}>
    <Text style={styles.error}>Erro ao carregar dados</Text>
  </View>

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
              Z-
              <Text style={styles.green}>F</Text>
              IT
              </Text>
              <View style={styles.cards}>
                <View style={styles.card}><Text style={styles.number}>{resumo.total}</Text><Text>Total de alunos</Text></View>
                <View style={styles.card}><Text style={styles.number}>{resumo.ativos}</Text><Text>Ativos</Text></View>
                <View style={styles.card}><Text style={styles.number}>{resumo.inativos}</Text><Text>Inativos</Text></View>
                <View style={styles.card}><Text style={styles.number}>{resumo.vencidos}</Text><Text>Vencem esta semana</Text></View>
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: theme.colors.black
  },
  title: {
      fontSize: 40,
      marginBottom: 10,
      color: "#fff",
      fontFamily: theme.fontFamily.extrabold
    },
    green: {
      color: theme.colors.green,
    },
    cards: { marginTop:32 },
  card: {
    backgroundColor:"#609346",
    borderRadius:10,
    padding:16,
    marginBottom:12,
  },
  number: { fontSize:22, color:"#fff", fontWeight:"bold", marginBottom:4 },
  error: {
    color: 'red',
  }
});
