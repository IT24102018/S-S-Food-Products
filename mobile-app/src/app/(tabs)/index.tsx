import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import FoodCard from "../../components/FoodCard";
import CustomButton from "../../components/CustomButton";

import { COLORS } from "../../theme/colors";
import { SPACING } from "../../constants/spacing";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.welcome}>
          Welcome to
        </Text>

        <Text style={styles.title}>
          S & S Food Products
        </Text>

        <Text style={styles.subtitle}>
          Premium Food Ordering Experience
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Featured Products
        </Text>

        <FoodCard
          title="Traditional Watalappan"
          price="Rs. 120"
          image="https://images.unsplash.com/photo-1551024601-bec78aea704b"
        />

        <FoodCard
          title="Premium Jelly Pudding"
          price="Rs. 120"
          image="https://images.unsplash.com/photo-1488477181946-6428a0291777"
        />

        <CustomButton
          title="Explore More Products"
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

  header: {
    padding: SPACING.lg,
    paddingTop: 70,
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
    color: COLORS.textSecondary,
    lineHeight: 24,
  },

  section: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.textPrimary,
  },
});