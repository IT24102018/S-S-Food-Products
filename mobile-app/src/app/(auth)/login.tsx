import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Link } from "expo-router";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { COLORS } from "../../theme/colors";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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

        <Link href="/(auth)/forgot-password" style={styles.link}>
          Forgot Password?
        </Link>

        <Link href="/(auth)/register" style={styles.link}>
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
  },

  content: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 30,
  },

  link: {
    marginTop: 16,
    textAlign: "center",
    color: COLORS.primary,
  },
});