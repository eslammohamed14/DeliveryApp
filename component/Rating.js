import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import { COLORS, dummyData, icons } from "../constants";

const Rating = ({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inActiveColor = COLORS.lightOrange3,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {dummyData.stars.map((item, index) => {
        return (
          <Image
            key={`rating-${index}`}
            source={icons.star}
            style={{
              tintColor: rating >= item.id ? activeColor : inActiveColor,
              ...styles.rateIcon,
              ...iconStyle,
            }}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});
export default Rating;
