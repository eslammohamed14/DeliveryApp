import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
} from "react-native";

import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../../constants";

import {
  IconButton,
  TwoPointSlider,
  TextButton,
  TextIconButton,
} from "../../component";

const Section = ({ title, containerStyle, children }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...FONTS.h3,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

const FilterModal = ({ isVisable, onClose }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = useState(isVisable);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  //animated for modal height

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 600],
  });

  function renderDistance() {
    return (
      <Section title={"Distance"}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TwoPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            postFix={"Km"}
            onValueChange={(values) => console.log(values)}
          />
        </View>
      </Section>
    );
  }

  function renderDeliveryTime() {
    return (
      <Section
        title={"Delivery Time"}
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
          }}
        >
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`delivery_Time${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: "30%",
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == deliveryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderPricingRange() {
    return (
      <Section
        title={"Pricing Range"}
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TwoPointSlider
            values={[10, 50]}
            min={1}
            max={100}
            preFix={"$"}
            postFix={""}
            onValueChange={(values) => console.log(values)}
          />
        </View>
      </Section>
    );
  }

  function renderRatings() {
    return (
      <Section
        title={"Ratings"}
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`delivery_Time${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == rating ? COLORS.white : COLORS.gray,
                }}
                containerStyle={{
                  flex: 1,
                  height: 40,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == rating ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setRating(item.id)}
                icon={icons.star}
                iconStyle={{
                  tintColor: item.id == rating ? COLORS.white : COLORS.gray,
                }}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderTags() {
    return (
      <Section
        title={"Tags"}
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
          }}
        >
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={`delivery_Time${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: "30%",
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }
  return (
    <Modal visible={isVisable} animationType={"fade"} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        {/* transparent backGround */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            backgroundColor: COLORS.white,
            position: "absolute",
            left: 0,
            right: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.radius,
            borderTopRightRadius: SIZES.radius,
            padding: SIZES.padding,
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                flex: 1,
                fontSize: 18,
              }}
            >
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{
                tintColor: COLORS.gray2,
              }}
              onPress={() => onClose()}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}
          >
            {/* Distance */}

            {renderDistance()}

            {/* Delivery Time */}

            {renderDeliveryTime()}

            {/* pricing range */}

            {renderPricingRange()}

            {/* rating */}

            {renderRatings()}

            {/* tags */}

            {renderTags()}
          </ScrollView>

          {/* Apply Button */}

          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 100,
              height: 150,
              backgroundColor: COLORS.white,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
            }}
          >
            <TextButton
              label={"Apply Filter"}
              buttonContainerStyle={{
                backgroundColor: COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                borderRadius: SIZES.base,
              }}
              labelStyle={{
                color: COLORS.white,
              }}
              onPress={() => console.log("Apply Filter")}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
