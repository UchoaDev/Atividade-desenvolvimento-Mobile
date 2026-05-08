import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Home" options={{ title: "Gastos" }} />
        <Stack.Screen name="addPrice" options={{ title: "Adicionar gasto" }} />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}