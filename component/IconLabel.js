import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View
      style={{
        ...containerStyle,
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        flexDirection: "row",
      }}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          ...iconStyle,
        }}
      />
      <Text
        style={{
          ...labelStyle,
          ...FONTS.body3,
          marginLeft: SIZES.base,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
