import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
} from "react-native";

import { COLORS } from "../theme/colors";

type Props = {
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function CustomInput({
  placeholder,
  secureTextEntry = false,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
  },
});