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

const CartQuantityButton = ({
  containerStyle,
  icon,
  iconStyle,
  quantity,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightOrange2,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          //tintColor: COLORS.white,
          ...iconStyle,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          width: 15,
          height: 15,
          borderRadius: 15 / 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.primary,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 10,
            lineHeight: 0,
            ...FONTS.body5,
          }}
        >
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartQuantityButton;
