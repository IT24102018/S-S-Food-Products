import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import SearchBar from "../../components/SearchBar";
import FoodCard from "../../components/FoodCard";

import { PRODUCTS } from "../../constants/product";
import { COLORS } from "../../theme/colors";

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Food Shop
      </Text>

      <SearchBar />

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FoodCard
            title={item.name}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    color: COLORS.primary,
  },
});