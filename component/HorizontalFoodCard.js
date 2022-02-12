import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.radius,
        flexDirection: "row",
        ...containerStyle,
      }}
    >
      {/* image */}

      <Image source={item.image} style={imageStyle} />
      {/* info */}

      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 17,
          }}
        >
          {item.name}
        </Text>

        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.darkGray2,
          }}
        >
          {item.description}
        </Text>

        <Text
          style={{
            ...FONTS.h2,
            marginTop: SIZES.base,
          }}
        >
          ${item.price}
        </Text>
      </View>
      {/* calories */}

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image
          source={icons.calories}
          style={{
            width: 30,
            height: 30,
          }}
        />
        <Text
          style={{
            color: COLORS.darkGray2,
            ...FONTS.body5,
          }}
        >
          {item.calories}Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
