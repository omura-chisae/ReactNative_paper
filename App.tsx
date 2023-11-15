import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Home } from "./src/components/pages/Home";
import { Header } from "./src/components/layouts/Header";

export default function App() {
  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header />
        <View style={styles.container}>
          <Home />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
});
