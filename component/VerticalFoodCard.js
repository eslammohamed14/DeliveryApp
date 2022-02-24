import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
//import { color } from "react-native-reanimated";

import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.radius,
        padding: SIZES.radius,
        alignItems: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* colories and favourite */}
      <View style={{ flexDirection: "row" }}>
        {/* colories */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image
            source={icons.calories}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.darkGray2,
            }}
          >
            {item.calories} Colories
          </Text>
        </View>
        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>
      {/* image */}
      <View
        style={{
          width: 150,
          height: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            marginTop: -15,
          }}
        />
      </View>

      {/* info */}

      <View
        style={{
          alignItems: "center",
          marginTop: -40,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.darkGray2,
            textAlign: "center",
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
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
