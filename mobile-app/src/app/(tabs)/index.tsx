import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import SearchBar from "../../components/SearchBar";
import CategoryCard from "../../components/CategoryCard";
import FoodCard from "../../components/FoodCard";
import CustomButton from "../../components/CustomButton";
import PromoBanner from "../../components/PromoBanner";
import ProductionCard from "../../components/ProductionCard";

import { COLORS } from "../../theme/colors";
import { SPACING } from "../../constants/spacing";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.welcome}>
          Welcome 👋
        </Text>

        <Text style={styles.title}>
          S & S Food Products
        </Text>

        <Text style={styles.subtitle}>
          Delicious homemade treats delivered to your doorstep.
        </Text>
      </View>

      <View style={styles.section}>
         <PromoBanner />
      </View>

      <View style={styles.searchSection}>
        <SearchBar />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Categories
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <CategoryCard title="Watalappan" />
          <CategoryCard title="Jelly Pudding" />
          <CategoryCard title="Desserts" />
          <CategoryCard title="Featured" />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Featured Products
        </Text>

        <FoodCard
          title="Traditional Watalappan"
          price="Rs. 120.00"
          image="https://images.unsplash.com/photo-1551024601-bec78aea704b"
        />

        <FoodCard
          title="Premium Jelly Pudding"
          price="Rs. 110.00"
          image="https://images.unsplash.com/photo-1488477181946-6428a0291777"
        />

        <FoodCard
          title="Breakfast - Rice & Curry"
          price="Rs. 200.00"
          image={require("../../../assets/images/rice-6247160_960_720-430x287.jpg")}
        />

        <CustomButton
          title="Explore Products"
        />
      </View>

      <View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Food Production
  </Text>

  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
  >
    <ProductionCard
      title="Traditional Watalappan"
      image="https://images.unsplash.com/photo-1505253716362-afaea6c55e16"
    />

    <ProductionCard
      title="Premium Jelly Pudding"
      image="https://images.unsplash.com/photo-1488477181946-6428a0291777"
    />
  </ScrollView>
  </View>

  <View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Quick Actions
  </Text>

  <CustomButton
    title="Order Watalappan"
  />

  <View style={{ height: 12 }} />

  <CustomButton
    title="Order Jelly Pudding"
  />
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  hero: {
    paddingTop: 70,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },

  welcome: {
    fontSize: 18,
    color: COLORS.textSecondary,
  },

  title: {
    marginTop: 6,
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textSecondary,
  },

  searchSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },

  section: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: COLORS.textPrimary,
  },
});