import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Alert, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { api } from "../services/api";
import { theme } from "../theme";
import { format } from "date-fns";
import { Aluno } from "../types/aluno";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

export default function VerAluno() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [filtroNome, setFiltroNome] = useState("");

  const isFocused = useIsFocused()

  const navigation = useNavigation()

  const [planoOpen, setPlanoOpen] = useState(false);
  const [plano, setPlano] = useState("todos");
  const [planoItems, setPlanoItems] = useState([
    { label: "Planos", value: "todos" },
    { label: "Diário", value: "diaria" },
    { label: "Mensal", value: "mensal" },
    { label: "Anual", value: "anual" },
  ]);

  const [statusOpen, setStatusOpen] = useState(false);
  const [status, setStatus] = useState("todos");
  const [statusItems, setStatusItems] = useState([
    { label: "Status", value: "todos" },
    { label: "Ativo", value: "ativo" },
    { label: "Inativo", value: "inativo" },
  ]);

  useEffect(() => {
    if(isFocused) {
      fetchAlunos(); 
       }
  }, []);

  const fetchAlunos = async () => {
    try {
      const res = await api.get("/alunos");
      setAlunos(res.data);
    } catch (err) {
      console.log("Erro ao buscar alunos", err);
    }
  };

  const filtrarAlunos = () => {
    return alunos.filter((aluno) => {
      const nomeMatch = aluno.nome.toLowerCase().includes(filtroNome.toLowerCase());
      const planoMatch = plano === "todos" || aluno.plano.toLowerCase() === plano.toLowerCase();
      const statusMatch = status === "todos" || aluno.status === status;
      return nomeMatch && planoMatch && statusMatch;
    });
  };

  const handleEditar = (id: number) => {
    navigation.navigate("EditarAluno", { id });
  };

 const handleExcluir = (id: number) => {
  Alert.alert(
    "Confirmar Exclusão",
    "Tem certeza que deseja excluir este aluno?",
    [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await api.delete(`/alunos/${id}`);
            Alert.alert("Sucesso", "Aluno excluído com sucesso!");
            fetchAlunos(); 
          } catch (error) {
            Alert.alert("Erro", "Erro ao excluir aluno");
            console.error("Erro ao excluir aluno:", error);
          }
        },
      },
    ]
  );
};


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Z-<Text style={styles.green}>F</Text>IT
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Buscar por nome..."
        placeholderTextColor="#999"
        value={filtroNome}
        onChangeText={setFiltroNome}
      />

  
      <DropDownPicker
        open={planoOpen}
        value={plano}
        items={planoItems}
        setOpen={setPlanoOpen}
        setValue={setPlano}
        setItems={setPlanoItems}
        placeholder="Plano"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.dropdownText}
        zIndex={3000}
      />
     
      <DropDownPicker
        open={statusOpen}
        value={status}
        items={statusItems}
        setOpen={setStatusOpen}
        setValue={setStatus}
        setItems={setStatusItems}
        placeholder="Filtrar por status"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.dropdownText}
        zIndex={2000}
      />

      <FlatList
        data={filtrarAlunos()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.status}>
                Status:{" "}
                <Text style={{ color: item.status === "ativo" ? "#4caf50" : "#f44336" }}>
                  {item.status}
                </Text>
              </Text>
              <Text style={styles.vencimento}>
                Vencimento: {format(new Date(item.dataVencimento), "dd/MM/yyyy")}
              </Text>
            </View>
            <View style={styles.botoes}>
              <TouchableOpacity onPress={() => handleEditar(item.id)} style={styles.btnEditar}>
                <Text style={styles.btnText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleExcluir(item.id)} style={styles.btnExcluir}>
                <Text style={styles.btnText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
  input: {
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 13,
    fontFamily: theme.fontFamily.extralight
  },
  dropdown: {
    backgroundColor: "#222",
    borderColor: "#444",
    marginBottom: 12,
  },
  dropdownContainer: {
    backgroundColor: "#333",
    borderColor: "#444",
  },
  dropdownText: {
    color: "#fff",
    fontFamily: theme.fontFamily.extralight,
    fontSize: 13
  },
  card: {
    backgroundColor: "#333",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
  },
  nome: {
    fontSize: 18,
    color: "#fff",
    fontFamily: theme.fontFamily.bold,
  },
  status: {
    color: "#ccc",
    marginTop: 4,
    fontFamily: theme.fontFamily.extralight
  },
  vencimento: {
    color: "#ccc",
    marginTop: 4,
    fontFamily: theme.fontFamily.thin
  },
  botoes: {
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  btnEditar: {
    backgroundColor: "#4caf50",
    paddingVertical: 6,
    borderRadius: 4,
    marginBottom: 5,
    width: 80,
    alignItems: "center",
  },
  btnExcluir: {
    backgroundColor: "#f44336",
    paddingVertical: 6,
    borderRadius: 4,
    width: 80,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontFamily: theme.fontFamily.bold
  },
});
