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

const TextIconButton = ({
  label,
  labelStyle,
  containerStyle,
  onPress,
  icon,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
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
      <Image
        source={icon}
        style={{
          ...iconStyle,
          width: 20,
          height: 20,
          marginLeft: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default TextIconButton;
