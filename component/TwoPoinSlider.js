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

import MultiSlider from "@ptomasroos/react-native-multi-slider";

const TwoPointSlider = ({
  values,
  min,
  max,
  postFix,
  preFix,
  onValueChange,
}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      min={min}
      max={max}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
      }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View
            style={{
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                borderWidth: 4,
                borderColor: COLORS.white,
                backgroundColor: COLORS.primary,
                ...styles.shadow,
              }}
            />
            <Text
              style={{
                color: COLORS.darkGray,
                marginTop: 5,
                ...FONTS.body3,
              }}
            >
              {preFix}
              {e.currentValue}
              {postFix}
            </Text>
          </View>
        );
      }}
      onValueChange={(values) => onValueChange(values)}
    />
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
});

export default TwoPointSlider;
