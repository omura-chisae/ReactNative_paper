import { memo } from "react";
import { View, StyleSheet } from "react-native";

export const Header = memo(() => {
  return (
    <View style={styles.container}>
      <p>Header</p>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#68B3E2",
    alignItems: "center",
    justifyContent: "center",
    height: 1,
  },
});
