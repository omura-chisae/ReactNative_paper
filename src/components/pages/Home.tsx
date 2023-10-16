import React, { memo, useCallback } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Text, PaperProvider } from "react-native-paper";
import { View } from "react-native";
import { Cards } from "../layouts/Cards";
import { UserModal } from "../layouts/UserModal";

export const Home = memo(() => {
  const [visible, setVisible] = React.useState(false);
  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);

  // const onClickCard = useCallback(() => {});

  const Open = useCallback(() => setVisible(true), []);

  return (
    <View>
      <Text>Home</Text>

      <Cards onClick={showModal} />
      <UserModal isOpen={visible} />
    </View>
  );
});
