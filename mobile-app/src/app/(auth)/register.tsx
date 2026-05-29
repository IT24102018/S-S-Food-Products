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

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          Join S & S Food Products
        </Text>

        <CustomInput placeholder="Full Name" />

        <CustomInput placeholder="Email Address" />

        <CustomInput placeholder="Phone Number" />

        <CustomInput
          placeholder="Password"
          secureTextEntry
        />

        <CustomButton title="Register" />

        <Link href="/(auth)/login" style={styles.link}>
          Already have an account?
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