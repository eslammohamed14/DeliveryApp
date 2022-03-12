import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import {
  SIZES,
  COLORS,
  icons,
  images,
  constants,
  FONTS,
  dummyData,
} from "../constants";

import { Header, IconButton, CartQuantityButton } from "../component";
import { useNavigation } from "@react-navigation/native";

const CardItem = ({ item, isSelected, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        borderWidth: 2,
        borderRadius: SIZES.radius,
        borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
      }}
      onPress={onPress}
    >
      {/* image */}
      <View
        style={{
          width: 60,
          height: 45,
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 35,
            height: 35,
            resizeMode: "contain",
          }}
          source={item.icon}
        />
      </View>
      {/* name */}
      <Text
        style={{
          flex: 1,
          ...FONTS.h4,
          paddingLeft: SIZES.radius,
        }}
      >
        {item.name}
      </Text>
      {/* checkBox */}
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{
          width: 25,
          height: 25,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CardItem;
