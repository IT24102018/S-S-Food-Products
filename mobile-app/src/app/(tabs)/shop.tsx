import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import { useState } from "react";

import SearchBar from "../../components/SearchBar";
import FoodCard from "../../components/FoodCard";
import CategoryFilter from "../../components/CategoryFilter";

import { PRODUCTS } from "../../constants/product";
import { COLORS } from "../../theme/colors";

export default function ShopScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Food Shop
      </Text>

      <SearchBar />

      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FoodCard
            id={item.id}
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