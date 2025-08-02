// src/components/RadioGroup/index.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export function RadioGroup({ label, options, selected, onChange }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.options}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.option}
            onPress={() => onChange(option)}
            accessibilityRole="radio"
            accessibilityState={{ selected: selected === option }}
          >
            <View style={styles.radioCircle}>
              {selected === option && <View style={styles.checked} />}
            </View>
            <Text style={styles.optionLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
