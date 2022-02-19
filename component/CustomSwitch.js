import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { SIZES, COLORS, icons, images, constants, FONTS } from "../constants";

const CustomSwitch = ({ value, onChange }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {/* switch */}
        <View
          style={value ? styles.switchOnContainer : styles.switchOffContainer}
        >
          <View
            style={{
              ...styles.dot,
              backgroundColor: value ? COLORS.white : COLORS.gray,
            }}
          />
        </View>
        {/* text */}
        <Text
          style={{
            color: value ? COLORS.primary : COLORS.gray,
            marginLeft: SIZES.base,
            ...FONTS.body4,
          }}
        >
          Save Me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchOnContainer: {
    width: 40,
    height: 20,
    borderRadius: 10,
    paddingRight: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: COLORS.primary,
  },
  switchOffContainer: {
    width: 40,
    height: 20,
    borderRadius: 10,
    paddingLeft: 2,
    justifyContent: "center",
    borderColor: COLORS.gray,
    borderWidth: 1,
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 12 / 2,
  },
});
export default CustomSwitch;
