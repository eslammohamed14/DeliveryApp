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
} from "../../constants";

import {
  Header,
  IconButton,
  CartQuantityButton,
  FooterTotal,
  StepperInput,
} from "../../component";
import { useNavigation } from "@react-navigation/native";

const MyCart = () => {
  const navigation = useNavigation();

  const [myCartList, setMyCartList] = useState(dummyData.myCart);

  /////////handler////////////
  function updateQuantityHandler(newQty, id) {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, qty: newQty } : cl
    );

    setMyCartList(newMyCartList);
  }

  function removeMyCartHandler(id) {
    const newMyCartList = [...myCartList];
    const index = newMyCartList.findIndex((cart) => cart.id === id);

    newMyCartList.splice(index, 1);
    setMyCartList(newMyCartList);
  }

  ///////render/////////
  function renderHeader() {
    return (
      <Header
        title={"My Cart"}
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 30,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              height: 20,
              width: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <CartQuantityButton
            icon={icons.cart}
            iconStyle={{
              tintColor: COLORS.black,
            }}
            quantity={1}
          />
        }
      />
    );
  }

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => {
          return (
            <View
              style={{
                height: 100,
                backgroundColor: COLORS.lightGray2,
                ...styles.cartItemContainer,
              }}
            >
              {/* image */}
              <View
                style={{
                  width: 90,
                  height: 100,
                  marginLeft: -10,
                }}
              >
                <Image
                  source={data.item.image}
                  resizeMode={"contain"}
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 10,
                  }}
                />
              </View>
              {/* name */}
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    ...FONTS.body3,
                  }}
                >
                  {data.item.name}
                </Text>

                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.primary,
                  }}
                >
                  {data.item.price}
                </Text>
              </View>

              {/* quantity */}

              <StepperInput
                containerStyle={{
                  backgroundColor: COLORS.white,
                  height: 50,
                  width: 125,
                }}
                value={data.item.qty}
                onAdd={() =>
                  updateQuantityHandler(data.item.qty + 1, data.item.id)
                }
                onMinus={() => {
                  if (data.item.qty > 1) {
                    updateQuantityHandler(data.item.qty - 1, data.item.id);
                  }
                }}
              />
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => {
          return (
            <IconButton
              containerStyle={{
                flex: 1,
                backgroundColor: COLORS.primary,
                justifyContent: "flex-end",
                ...styles.cartItemContainer,
              }}
              icon={icons.delete_icon}
              iconStyle={{
                marginRight: 10,
              }}
              onPress={() => removeMyCartHandler(data.item.id)}
            />
          );
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}

      {renderHeader()}

      {/* CartList */}

      {renderCartList()}

      {/* Footer */}
      <FooterTotal
        subTotal={37.97}
        shippingFee={0}
        total={37.97}
        onPress={() => navigation.navigate("MyCard")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default MyCart;
