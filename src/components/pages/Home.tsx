import React, { memo, useCallback } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Text, PaperProvider, Portal } from "react-native-paper";
import { View } from "react-native";
import { Cards } from "../layouts/Cards";
import { UserModal } from "../layouts/UserModal";

export const Home = memo(() => {
  const [visible, setVisible] = React.useState(false);
  // const hideModal = () => setVisible(false);

  const onClickCard = useCallback(() => setVisible(true), []);

  return (
    <View>
      <Text>Home</Text>

      <Cards onClick={onClickCard} />
      <UserModal isOpen={visible} />
      <Cards onClick={onClickCard} />
      <UserModal isOpen={visible} />
    </View>
  );
});
