import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import { COLORS } from "../theme/colors";
import { RADIUS } from "../constants/radius";

type Props = {
  title: string;
  price: string;
  image: any;
};

export default function FoodCard({
  title,
  price,
  image,
}: Props) {
  return (
    <View style={styles.card}>
      <Image
  source={
    typeof image === "string"
      ? { uri: image }
      : image
  }
  style={styles.image}
/>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    overflow: "hidden",
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },

  price: {
    marginTop: 6,
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "600",
  },
});