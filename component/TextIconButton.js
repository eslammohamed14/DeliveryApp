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
  iconPosition,
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
      {iconPosition == "Left" && (
        <Image
          source={icon}
          style={{
            ...iconStyle,
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
      )}

      <Text
        style={{
          ...labelStyle,
          ...FONTS.h3,
          //color: COLORS.white,
        }}
      >
        {label}
      </Text>
      {iconPosition == "Right" && (
        <Image
          source={icon}
          style={{
            ...iconStyle,
            width: 20,
            height: 20,
            marginLeft: 10,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default TextIconButton;
