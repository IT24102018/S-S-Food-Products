import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS } from "../theme/colors";

type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

const categories = [
  "All",
  "Watalappan",
  "Jelly",
  "Desserts",
];

export default function CategoryFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => onSelect(category)}
          style={[
            styles.chip,
            selected === category &&
              styles.activeChip,
          ]}
        >
          <Text
            style={[
              styles.text,
              selected === category &&
                styles.activeText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },

  chip: {
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  activeChip: {
    backgroundColor: COLORS.primary,
  },

  text: {
    color: COLORS.textPrimary,
  },

  activeText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});