import { View, Text, StyleSheet } from "react-native";

import { COLORS } from "../theme/colors";

export default function PromoBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>SPECIAL OFFER</Text>

      <Text style={styles.title}>
        15% OFF on Watalappan Orders
      </Text>

      <Text style={styles.subtitle}>
        Limited time promotion for premium desserts.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    padding: 24,
  },

  badge: {
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 8,
  },

  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#FFF",
    marginTop: 8,
    opacity: 0.9,
  },
});