import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";

const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...buttonContainerStyle,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: COLORS.primary,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...labelStyle,
          ...FONTS.h3,
          //color: COLORS.white,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
