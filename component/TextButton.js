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

const TextButton = ({
  buttonContainerStyle,
  label,
  labelStyle,
  label2 = "",
  label2Style,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...buttonContainerStyle,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        //backgroundColor: COLORS.primary,
      }}
      disabled={disabled}
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
      {label2 != "" && (
        <Text
          style={{
            flex: 1,
            textAlign: "right",
            ...label2Style,
            ...FONTS.h3,
            //color: COLORS.white,
          }}
        >
          {label2}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
