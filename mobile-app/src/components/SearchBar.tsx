import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../theme/colors";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color={COLORS.textSecondary}
      />

      <TextInput
        placeholder="Search products..."
        placeholderTextColor="#999"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: COLORS.white,

    borderRadius: 16,

    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});