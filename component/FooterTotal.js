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
import LinearGradient from "react-native-linear-gradient";
import LineDivider from "./LineDivider";
import TextButton from "./TextButton";

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
  return (
    <View>
      {/* shadow */}

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: "absolute",
          top: -15,
          right: 0,
          left: 0,
          bottom: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      {/* data */}

      <View
        style={{
          backgroundColor: COLORS.white,
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {/* subTotal */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              flex: 1,
              ...FONTS.body3,
            }}
          >
            Subtotal
          </Text>

          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            ${subTotal.toFixed(2)}
          </Text>
        </View>
        {/* shipping fee */}

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            marginBottom: SIZES.padding,
          }}
        >
          <Text
            style={{
              flex: 1,
              ...FONTS.body3,
            }}
          >
            Shipping Fee
          </Text>

          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            ${shippingFee.toFixed(2)}
          </Text>
        </View>

        {/* line */}
        <LineDivider />
        {/* total */}

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              flex: 1,
              ...FONTS.body3,
            }}
          >
            Total
          </Text>

          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            ${total.toFixed(2)}
          </Text>
        </View>
        {/* button */}
        <TextButton
          buttonContainerStyle={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            height: 60,
            marginTop: SIZES.padding,
          }}
          label={"Place your order"}
          labelStyle={{
            color: COLORS.white,
          }}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
