import {
    router,
    useLocalSearchParams,
} from "expo-router";

import React, {
    useEffect,
    useState,
} from "react";

import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { styles } from "../styles/card";

type Gasto = {
  id: string;
  descricao: string;
  valor: number;
};

export default function Home() {
  const params = useLocalSearchParams();

  const [gastos, setGastos] =
    useState<Gasto[]>([]);

  useEffect(() => {
    if (params.gastos) {
      setGastos(
        JSON.parse(
          params.gastos as string
        )
      );
    }
  }, [params]);

  const total = gastos.reduce(
    (soma, item) =>
      soma + item.valor,
    0
  );

  function excluirGasto(id: string) {
    const novaLista = gastos.filter(
      (item) => item.id !== id
    );

    setGastos(novaLista);

    router.replace({
      pathname: "/Home",
      params: {
        gastos: JSON.stringify(
          novaLista
        ),
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Controle de Gastos
      </Text>

      <Text style={styles.total}>
        Total gasto: R${" "}
        {total
          .toFixed(2)
          .replace(".", ",")}
      </Text>

      <FlatList
        data={gastos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum gasto registrado.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text
                style={styles.descricao}
              >
                {item.descricao}
              </Text>

              <Text style={styles.valor}>
                R${" "}
                {item.valor
                  .toFixed(2)
                  .replace(".", ",")}
              </Text>
            </View>

            <TouchableOpacity
              style={
                styles.botaoExcluir
              }
              onPress={() =>
                excluirGasto(item.id)
              }
            >
              <Text
                style={
                  styles.textoBotao
                }
              >
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() =>
          router.push({
            pathname: "/addPrice",
            params: {
              gastos:
                JSON.stringify(
                  gastos
                ),
            },
          })
        }
      >
        <Text style={styles.textoBotao}>
          Adicionar gasto
        </Text>
      </TouchableOpacity>
    </View>
  );
}