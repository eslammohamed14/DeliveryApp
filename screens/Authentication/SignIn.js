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
  LocalStorage,
} from "../../constants";

import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../component";
import { utils } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const SignIn = ({}) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  const isEnableSignIn = () => {
    return email != "" && password != "" && emailError == "";
  };

  const storeToken = (value) => {
    return LocalStorage.storeData("Token", value);
  };

  return (
    <AuthLayout
      title={"Let's Sign You In"}
      subTitle={"Welcome back, You've been missed"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding * 2,
          }}
        >
          {/* text inputs */}
          <FormInput
            label={"Email"}
            keyboardType="email-address"
            autoCompleteType="email"
            onChange={(value) => {
              utils.validateEmail(value, setEmailError);
              setEmail(value);
            }}
            errorMsg={emailError}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    email == "" || (email != "" && emailError == "")
                      ? icons.correct
                      : icons.cross
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      email == ""
                        ? COLORS.gray
                        : email != "" && emailError == ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />

          <FormInput
            label={"Password"}
            secureTextEntry={!showPass}
            //keyboardType="password"
            autoCompleteType="password"
            onChange={(value) => {
              setPassword(value);
            }}
            containerStyle={{
              marginTop: SIZES.radius,
            }}
            //errorMsg={emailError}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setShowPass(!showPass)}
              >
                <Image
                  source={showPass ? icons.eye_close : icons.eye}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.gray,
                  }}
                />
              </TouchableOpacity>
            }
          />

          {/* save me && forgot pass */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.base,
              justifyContent: "space-between",
            }}
          >
            <CustomSwitch
              value={saveMe}
              onChange={(value) => setSaveMe(value)}
            />
            <TextButton
              label={"Forget Password?"}
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                ...FONTS.body4,
                color: COLORS.gray,
              }}
              onPress={() => navigation.navigate("ForgotPassword")}
            />
          </View>
          {/* sign in */}
          <View
            style={{
              alignItems: "center",
              marginTop: SIZES.padding,
            }}
          >
            <TextButton
              label={"Sign In"}
              disabled={isEnableSignIn() ? false : true}
              labelStyle={{
                color: COLORS.white,
              }}
              buttonContainerStyle={{
                backgroundColor: isEnableSignIn()
                  ? COLORS.primary
                  : COLORS.transparentPrimray,
                width: "100%",
                height: 60,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                storeToken(email);
                // props.refresh();
                navigation.navigate("MainLayout");
              }}
            />
          </View>

          {/* sign up */}

          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.gray,
              }}
            >
              Don't have an account?
            </Text>
            <TextButton
              label={"Sign Up"}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.body3,
                paddingLeft: SIZES.base,
              }}
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
          {/* social */}
          <View>
            <TextIconButton
              label={"Continue With Facebook"}
              iconPosition="Left"
              labelStyle={{
                color: COLORS.white,
              }}
              containerStyle={{
                marginTop: SIZES.padding * 2,
                backgroundColor: COLORS.blue,
                borderRadius: SIZES.radius,
                height: 55,
              }}
              icon={icons.fb}
              iconStyle={{
                tintColor: COLORS.white,
              }}
            />

            <TextIconButton
              label={"Continue With Google"}
              iconPosition="Left"
              labelStyle={{
                color: COLORS.darkGray,
              }}
              containerStyle={{
                marginTop: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                borderRadius: SIZES.radius,
                height: 55,
                marginBottom: 30,
              }}
              icon={icons.google}
              iconStyle={
                {
                  //tintColor: COLORS.white,
                }
              }
            />
          </View>
        </View>
      </ScrollView>
    </AuthLayout>
  );
};

export default SignIn;
