import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import AuthLayout from "./AuthLayout";
import {
  SIZES,
  COLORS,
  icons,
  images,
  constants,
  FONTS,
} from "../../constants";

import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../component";

const Otp = () => {
  return (
    <AuthLayout
      title={"OTP Authentication"}
      subTitle={"A authentication code has been sent to eslam@eslam.com"}
    >
      {/* OTP input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
          backgroundColor: "red",
        }}
      >
        {/* <OTPInputView
          pinCount={4}
          style={{
            width: "100%",
            height: 50,
          }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => console.log(code)}
        /> */}
      </View>
      {/* footer */}
    </AuthLayout>
  );
};

export default Otp;
