import { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  onClick: () => void;
};

export const Cards: React.FC<Props> = memo((props) => {
  const { onClick } = props;

  return (
    <View>
      <Card style={styles.container} onPress={() => onClick()}>
        <Card.Title title="Card Title" />
        <Card.Content>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderColor: "#68B3E2",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    padding: 10,
  },
});
