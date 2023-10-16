import * as React from "react";
import { memo } from "react";
import { Modal, Text } from "react-native";
import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  isOpen: boolean;
};

export const UserModal: React.FC<Props> = memo((props) => {
  const { isOpen } = props;
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const styles = { backgroundColor: "white", padding: 20 };

  return (
    <Modal visible={visible} onDismiss={hideModal} style={styles}>
      <Text>Example Modal. Click outside this area to dismiss.</Text>
      <PrimaryButton onClick={hideModal}>閉じる</PrimaryButton>
    </Modal>
  );
});
