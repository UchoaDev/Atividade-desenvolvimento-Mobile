import {
  router,
  useLocalSearchParams
} from "expo-router";

import React, {
  useState
} from "react";

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "../styles/card";

type Gasto = {
  id: string;
  descricao: string;
  valor: number;
};

export default function AddPrice() {
  const [descricao,
    setDescricao] =
    useState("");

  const [valor,
    setValor] =
    useState("");

  const [erro,
    setErro] =
    useState("");

  const params =
    useLocalSearchParams();

  function salvarGasto() {

    const valorNumerico =
      Number(
        valor.replace(",", ".")
      );

    if (
      descricao.trim() === ""
    ) {
      setErro(
        "Digite a descrição do gasto."
      );

      return;
    }

    if (
      !valorNumerico ||
      valorNumerico <= 0
    ) {
      setErro(
        "Digite um valor maior que zero."
      );

      return;
    }

    const gastosAntigos: Gasto[] = params.gastos
      ? JSON.parse(params.gastos as string)
      : [];

    const novoGasto:
      Gasto = {
      id: Date.now()
        .toString(),

      descricao:
        descricao.trim(),

      valor:
        valorNumerico,
    };

    const novaLista = [
      ...gastosAntigos,
      novoGasto,
    ];

    router.replace({
      pathname: "/Home",

      params: {
        gastos:
          JSON.stringify(
            novaLista
          ),
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Novo gasto
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição do gasto"
        value={descricao}
        onChangeText={
          setDescricao
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={
          setValor
        }
        keyboardType="numeric"
      />

      {erro !== "" && (
        <Text style={styles.erro}>
          {erro}
        </Text>
      )}

      <TouchableOpacity
        style={
          styles.botaoAdicionar
        }
        onPress={salvarGasto}
      >
        <Text
          style={
            styles.textoBotao
          }
        >
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}