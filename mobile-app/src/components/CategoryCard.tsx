import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS } from "../theme/colors";

type Props = {
  title: string;
};

export default function CategoryCard({
  title,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.orangeLight,

    paddingVertical: 14,
    paddingHorizontal: 20,

    borderRadius: 18,

    marginRight: 12,
  },

  text: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});