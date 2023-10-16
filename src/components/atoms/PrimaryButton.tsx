import { memo } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const PrimaryButton: React.FC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button mode="contained" buttonColor="#68B3E2">
      {children}
    </Button>
  );
});
