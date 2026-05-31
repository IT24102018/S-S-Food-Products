import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import { COLORS } from "../theme/colors";

type Props = {
  title: string;
  image: string;
};

export default function ProductionCard({
  title,
  image,
}: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    marginRight: 16,
  },

  image: {
    width: "100%",
    height: 140,
    borderRadius: 20,
  },

  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.textPrimary,
  },
});