import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

import { COLORS } from "../theme/colors";
import { RADIUS } from "../constants/radius";

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function CustomButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: RADIUS.md,
    alignItems: "center",
  },

  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});