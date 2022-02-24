import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Animated from "react-native-reanimated";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import {
  MainLayout,
  Home,
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
  SignIn,
} from "../screens";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
  LocalStorage,
} from "../constants";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tabs/tabActions";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ drawerAnimationStyle }) => {
  return (
    <Animated.View
      style={[{ flex: 1, overflow: "hidden" }, drawerAnimationStyle]}
    >
      <Stack.Navigator
        screenOptions={{ headerTitle: null, headerShown: false }}
      >
        <Stack.Screen name="MainLayout" component={MainLayout} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="MyCard" component={MyCard} />
        <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const CusomDrawerItem = ({ label, icon, onPress, isFocused }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.base,
        borderRadius: SIZES.base,
        paddingLeft: SIZES.radius,
        height: 40,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />

      <Text
        style={{
          color: COLORS.white,
          marginLeft: 15,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CusomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Close Button */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
          }}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              flexDirection: "column",
              marginLeft: SIZES.radius,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              {dummyData.myProfile?.name}
            </Text>

            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
              }}
            >
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}

        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}
        >
          <CusomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home);
              navigation.navigate("MainLayout");
            }}
          />
          <CusomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CusomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => {
              setSelectedTab(constants.screens.notification);
              //navigation.navigate("MainLayout");
            }}
          />
          <CusomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite);
              //navigation.navigate("MainLayout");
            }}
          />
          {/*******line Divide******** */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          <CusomDrawerItem label={"Track your order"} icon={icons.location} />
          <CusomDrawerItem label={"Coupons"} icon={icons.coupon} />
          <CusomDrawerItem label={"Setting"} icon={icons.setting} />
          <CusomDrawerItem label={"Invite a friend"} icon={icons.profile} />
          <CusomDrawerItem label={"Help center"} icon={icons.help} />
        </View>

        {/* Log out */}

        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <CusomDrawerItem
            label={"Logout"}
            icon={icons.logout}
            onPress={() => {
              navigation.navigate("SignIn");
              LocalStorage.clearStorage();
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return (
            <CusomDrawerContent
              navigation={props.navigation}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
          );
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => (
            <Screens {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

function mapStateToProps(state) {
  return { selectedTab: state.tabReducer.selectedTab };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
