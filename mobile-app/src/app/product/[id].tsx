import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import { PRODUCTS } from "../../constants/product";
import CustomButton from "../../components/CustomButton";

import { COLORS } from "../../theme/colors";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.find(
    (item) => item.id === String(id)
  );

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={
          typeof product.image === "string"
            ? { uri: product.image }
            : product.image
        }
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {product.name}
        </Text>

        <Text style={styles.price}>
          {product.price}
        </Text>

        <Text style={styles.description}>
          Premium handcrafted dessert made
          with quality ingredients.
        </Text>

        <CustomButton title="Add To Cart" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  image: {
    width: "100%",
    height: 280,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },

  price: {
    marginTop: 10,
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: "bold",
  },

  description: {
    marginVertical: 20,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});