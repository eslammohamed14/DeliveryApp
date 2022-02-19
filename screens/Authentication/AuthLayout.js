import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import {
  SIZES,
  COLORS,
  icons,
  images,
  constants,
  FONTS,
} from "../../constants";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AuthLayout = ({ title, subTitle, titleContainerStyle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* App icon */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={images.logo_02}
            style={{
              height: 100,
              width: 200,
              resizeMode: "contain",
            }}
          />
        </View>

        {/* title & subTitle */}

        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: COLORS.gray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            {subTitle}
          </Text>
        </View>

        {/* children */}

        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
