import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import { COLORS } from "../theme/colors";
import { RADIUS } from "../constants/radius";

type Props = {
  id: string;
  title: string;
  price: string;
  image: any;
};

export default function FoodCard({
  id,
  title,
  price,
  image,
}: Props) {
  const handlePress = () => {
    router.push({
      pathname: "/product/[id]" as any,
      params: { id },
    });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <Image
        source={
          typeof image === "string"
            ? { uri: image }
            : image
        }
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.price}>
          {price}
        </Text>
      </View>
    </TouchableOpacity>
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