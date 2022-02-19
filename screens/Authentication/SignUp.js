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
import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPass, setShowPass] = useState(false);

  const isEnableSignUp = () => {
    return (
      email != "" &&
      password != "" &&
      userName != "" &&
      emailError == "" &&
      passwordError == ""
    );
  };

  return (
    <AuthLayout
      title={"Getting Started"}
      subTitle={"Create an account to continue!"}
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding * 2,
          }}
        >
          {/********* * text inputs **********/}

          {/* email */}
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
          {/* username */}
          <FormInput
            label={"UserName"}
            keyboardType="email-address"
            autoCompleteType="username"
            onChange={(value) => {
              setUserName(value);
            }}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.correct}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: userName == "" ? COLORS.gray : COLORS.green,
                  }}
                />
              </View>
            }
          />

          {/* pass */}
          <FormInput
            label={"Password"}
            secureTextEntry={!showPass}
            //keyboardType="password"
            autoCompleteType="password"
            onChange={(value) => {
              utils.validatePassword(value, setPasswordError);
              setPassword(value);
            }}
            containerStyle={{
              marginTop: SIZES.radius,
            }}
            errorMsg={passwordError}
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

          {/* sign up */}
          <View
            style={{
              alignItems: "center",
              marginTop: SIZES.padding,
            }}
          >
            <TextButton
              label={"Sign Up"}
              disabled={isEnableSignUp() ? false : true}
              labelStyle={{
                color: COLORS.white,
              }}
              buttonContainerStyle={{
                backgroundColor: isEnableSignUp()
                  ? COLORS.primary
                  : COLORS.transparentPrimray,
                width: "100%",
                height: 60,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                navigation.navigate("Otp");
              }}
            />
          </View>

          {/* sign on */}

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
              Already have an account?
            </Text>
            <TextButton
              label={"Sign In"}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.body3,
                paddingLeft: SIZES.base,
              }}
              onPress={() => navigation.navigate("SignIn")}
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

export default SignUp;
