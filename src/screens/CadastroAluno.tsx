import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from "react-native";
import { api } from "../services/api";
import { theme } from "../theme";
import { RadioGroup } from "../components/radio";
import { Input } from "../components/input";

export default function CriarAluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [plano, setPlano] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [status, setStatus] = useState('');

  function handleSalvar () {
    if (!nome || !idade || !plano || !dataInicio || !dataVencimento || !status ) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    api.post('/alunos', {
      nome,
      idade: Number(idade),
      plano,
      dataInicio: dataInicio,
      dataVencimento: dataVencimento,
      status,
    }).then(() => {
      Alert.alert("Sucesso!", "Aluno cadastrado com sucesso!");
      setNome('');
      setIdade('');
      setPlano('');
      setDataInicio('');
      setDataVencimento('');
      setStatus('');
    }).catch(() => {
      Alert.alert('Erro', 'Erro ao cadastrar aluno');
    });
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Z-
          <Text style={styles.green}>F</Text>
          IT
        </Text>
      </View>

      <ScrollView style={{marginBottom: 20}}>
        <Text style={styles.subTitle}>Cadastrar Aluno</Text>

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


      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      
      </ScrollView>

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
    marginBottom: 10
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
  
});

