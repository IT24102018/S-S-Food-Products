import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { COLORS } from "../../theme/colors";

export default function ForgotPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Reset Password
        </Text>

        <Text style={styles.subtitle}>
          Enter your email address
        </Text>

        <CustomInput placeholder="Email Address" />

        <CustomButton title="Send Reset Link" />
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
});