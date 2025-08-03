import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { theme } from "../theme";
import { RadioGroup } from "../components/radio";
import { Input } from "../components/input";

export default function EditarAluno() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: number };

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [plano, setPlano] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get(`/alunos/${id}`)
      .then((res) => {
        const aluno = res.data;
        setNome(aluno.nome);
        setIdade(String(aluno.idade));
        setPlano(aluno.plano);
        setDataInicio(formatDate(aluno.dataInicio));
        setDataVencimento(formatDate(aluno.dataVencimento));
        setStatus(aluno.status);
      })
      .catch(() => {
        Alert.alert("Erro", "Erro ao carregar dados do aluno");
      });
  }, [id]);

  function formatDate(dateStr: string) {
    return dateStr.split('T')[0];
  }

  function handleAtualizar() {
    if (!nome || !idade || !plano || !dataInicio || !dataVencimento || !status) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    api.put(`/alunos/${id}`, {
      nome,
      idade: Number(idade),
      plano,
      dataInicio,
      dataVencimento,
      status,
    }).then(() => {
      Alert.alert("Sucesso!", "Aluno atualizado com sucesso!");
      navigation.goBack(); // volta pra lista ou card
    }).catch(() => {
      Alert.alert("Erro", "Erro ao atualizar aluno");
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.black }}>
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
  >
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Z-<Text style={styles.green}>F</Text>IT
          </Text>
        </View>

        <Text style={styles.subTitle}>Editar Aluno</Text>

        <Input label="Nome" value={nome} onChangeText={setNome} placeholder="Nome do aluno" />
        <Input label="Idade" value={idade} onChangeText={setIdade} keyboardType="numeric" placeholder="Idade" />

        <RadioGroup
          label="Plano:"
          options={['Diaria', 'Mensal', 'Anual']}
          selected={plano}
          onChange={setPlano}
        />

        <Input label="Data de Início" value={dataInicio} onChangeText={setDataInicio} placeholder="YYYY-MM-DD" />
        <Input label="Data de Término" value={dataVencimento} onChangeText={setDataVencimento} placeholder="YYYY-MM-DD" />

        <RadioGroup
          label="Status:"
          options={['ativo', 'inativo']}
          selected={status}
          onChange={setStatus}
        />

        <TouchableOpacity style={styles.button} onPress={handleAtualizar}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
</SafeAreaView>

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
    marginBottom: 2,
  },
  green: {
    color: theme.colors.green,
  },
  title: {
    fontSize: 40,
    color: "#fff",
    marginVertical: 24,
    fontFamily: theme.fontFamily.bold,
  },
  subTitle: {
    fontSize: 20,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.green,
    paddingVertical: 12,
    borderRadius: 32,
    marginTop: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: theme.fontFamily.bold,
  },
  scrollContent: {
  flexGrow: 1,
  backgroundColor: theme.colors.black,
  paddingBottom: 60,
},
});
