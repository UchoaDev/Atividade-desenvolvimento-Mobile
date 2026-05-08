import { StyleSheet } from "react-native";

export const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f5f5f5",
    },

    titulo: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
    },

    total: {
      backgroundColor: "#222",
      color: "#fff",
      padding: 15,
      borderRadius: 10,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },

    item: {
      backgroundColor: "#fff",
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: "row",
      justifyContent:
        "space-between",
      alignItems: "center",
    },

    descricao: {
      fontSize: 18,
      fontWeight: "bold",
    },

    valor: {
      fontSize: 16,
      color: "#666",
    },

    botaoAdicionar: {
      backgroundColor: "#2e86de",
      padding: 15,
      borderRadius: 10,
      marginTop: 20,
    },

    botaoExcluir: {
      backgroundColor: "#e74c3c",
      padding: 10,
      borderRadius: 8,
    },

    textoBotao: {
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 16,
    },

    input: {
      backgroundColor: "#fff",
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      fontSize: 16,
    },

    erro: {
      color: "red",
      textAlign: "center",
      marginBottom: 15,
      fontWeight: "bold",
    },

    vazio: {
      textAlign: "center",
      marginTop: 40,
      fontSize: 16,
      color: "#777",
    },
  });