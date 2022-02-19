import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { SIZES, COLORS, icons, images, constants, FONTS } from "../constants";

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitaliza = "none",
  errorMsg = "",
}) => {
  return (
    <View style={{ ...containerStyle }}>
      {/* label & error message */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {label}
        </Text>

        <Text
          style={{
            color: COLORS.red,
            ...FONTS.body4,
          }}
        >
          {errorMsg}
        </Text>
      </View>

      {/* textInput */}
      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {prependComponent}

        <TextInput
          placeholder={placeholder}
          style={{
            flex: 1,
            ...inputStyle,
          }}
          onChangeText={(text) => onChange(text)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitaliza}
          autoCompleteType={autoCompleteType}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
