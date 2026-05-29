import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { COLORS } from "../../theme/colors";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="restaurant"
          size={60}
          color={COLORS.primary}
        />

        <Text style={styles.title}>
          Welcome Back
        </Text>

        <Text style={styles.subtitle}>
          Sign in to continue
        </Text>

        <CustomInput placeholder="Email Address" />

        <CustomInput
          placeholder="Password"
          secureTextEntry
        />

        <CustomButton title="Login" />

        <Link
          href="/(auth)/forgot-password"
          style={styles.link}
        >
          Forgot Password?
        </Link>

        <Link
          href="/(auth)/register"
          style={styles.link}
        >
          Create Account
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
  },

  title: {
    marginTop: 12,
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 24,
    color: COLORS.textSecondary,
    fontSize: 16,
  },

  link: {
    textAlign: "center",
    marginTop: 16,
    color: COLORS.primary,
  },
});