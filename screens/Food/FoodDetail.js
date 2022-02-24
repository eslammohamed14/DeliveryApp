import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

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
  IconLabel,
  TextButton,
  LineDivider,
  Rating,
  StepperInput,
} from "../../component";

const FoodDetail = () => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);

  function renderHeader() {
    return (
      <Header
        title={"Details"}
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

  function renderDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* colories & image */}
        <View
          style={{
            backgroundColor: COLORS.lightGray1,
            height: 170,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {/* colories & favourite */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.radius,
            }}
          >
            {/* colories */}

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.calories}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.darkGray2,
                }}
              >
                {foodItem.calories} Calories
              </Text>
            </View>

            {/* fav */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite
                  ? COLORS.primary
                  : COLORS.darkGray2,
              }}
            />
          </View>

          {/* image */}
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Image
              source={foodItem?.image}
              style={{
                resizeMode: "contain",
                width: "100%",
                height: 170,
              }}
            />
          </View>
        </View>

        {/* food info */}

        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
            }}
          >
            {foodItem?.name}
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.darkGray,
              textAlign: "justify",
              marginTop: SIZES.base,
            }}
          >
            {foodItem?.description}
          </Text>

          {/* rating & duration & shiping */}

          <View
            style={{
              marginTop: SIZES.padding,
              flexDirection: "row",
            }}
          >
            {/* rating */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              icon={icons.star}
              label={"4.5"}
              labelStyle={{
                color: COLORS.white,
              }}
            />

            {/* duration */}
            <IconLabel
              containerStyle={{
                marginHorizontal: SIZES.radius,
              }}
              icon={icons.clock}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label={"30 Mins"}
              labelStyle={{
                color: COLORS.black,
              }}
            />

            {/* shiping */}
            <IconLabel
              containerStyle={{}}
              icon={icons.dollar}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label={"free shiping"}
              labelStyle={{
                color: COLORS.black,
              }}
            />
          </View>

          {/* sizes */}

          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              Sizes:
            </Text>
            {dummyData.sizes.map((item, index) => {
              return (
                <TextButton
                  key={`Sizes-${index}`}
                  buttonContainerStyle={{
                    width: 55,
                    height: 55,
                    borderRadius: SIZES.radius,
                    borderWidth: item.id == selectedSize ? 0 : 1,
                    borderColor: COLORS.gray2,
                    backgroundColor:
                      item.id == selectedSize ? COLORS.primary : null,
                  }}
                  label={item.label}
                  labelStyle={{
                    color:
                      item.id == selectedSize ? COLORS.white : COLORS.gray2,
                    ...FONTS.body2,
                  }}
                  onPress={() => {
                    setSelectedSize(item.id);
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }

  function renderRestaurant() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.radius,
          marginTop: SIZES.radius,
          alignItems: "center",
        }}
      >
        {/* image */}
        <Image
          source={images.profile}
          style={{
            width: 50,
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />
        {/* info */}
        <View
          style={{
            marginLeft: SIZES.radius,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            ByProgrammers
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.gray,
            }}
          >
            1.2 KM away from you
          </Text>
        </View>

        {/* rating */}

        <Rating rating={4} />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.radius,
          flexDirection: "row",
          paddingBottom: SIZES.radius,
          height: 100,
          alignItems: "center",
        }}
      >
        {/* stepperInput */}
        <StepperInput
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />

        {/* text button */}

        <TextButton
          buttonContainerStyle={{
            flex: 1,
            backgroundColor: COLORS.primary,
            marginLeft: SIZES.radius,
            borderRadius: SIZES.radius,
            height: 60,
            paddingHorizontal: SIZES.radius,
          }}
          label={"Buy now"}
          labelStyle={{
            color: COLORS.white,
          }}
          label2={"$15.99"}
          label2Style={{
            color: COLORS.white,
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* header */}
      {renderHeader()}
      {/* body */}

      <ScrollView>
        {/* Food Details */}
        {renderDetails()}

        {/* line divider */}

        <LineDivider />

        {/* Restaurant */}

        {renderRestaurant()}
      </ScrollView>

      {/* footer */}
      <LineDivider />

      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
