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
import { TextButton } from "../../component";

import {
  SIZES,
  COLORS,
  icons,
  images,
  constants,
  FONTS,
} from "../../constants";

const OnBoarding = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  //// detect index of list ////
  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const renderHeaderLogo = () => {
    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: SIZES.height > 800 ? 50 : 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo_02}
          resizeMode={"contain"}
          style={{
            width: SIZES.width * 0.5,
            height: 100,
          }}
        />
      </View>
    );
  };

  const Dots = () => {
    //// divide scrollX by Width to return page number ////

    const dotPostion = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPostion.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: "clamp",
          });

          const dotWidth = dotPostion.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`Dot-${index}`}
              style={{
                height: 10,
                width: dotWidth,
                borderRadius: 5,
                backgroundColor: dotColor,
                marginHorizontal: 10,
              }}
            ></Animated.View>
          );
        })}
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          height: 160,
        }}
      >
        {/* Dots */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Dots />
        </View>
        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label={"Skip"}
              labelStyle={{
                color: COLORS.darkGray,
              }}
              onPress={() => navigation.replace("SignIn")}
            />

            <TextButton
              label={"Next"}
              labelStyle={{
                color: COLORS.white,
              }}
              buttonContainerStyle={{
                backgroundColor: COLORS.primary,
                width: SIZES.width * 0.5,
                height: 60,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                //scroll to the next
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  Animated: true,
                });
              }}
            />
          </View>
        ) : (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label={"Let's Get Started"}
              labelStyle={{
                color: COLORS.white,
              }}
              buttonContainerStyle={{
                backgroundColor: COLORS.primary,
                width: "100%",
                height: 60,
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeaderLogo()}
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        /// mesh fahemha ////////
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}
            >
              <View style={{ flex: 3 }}>
                {/* header */}
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode={"contain"}
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>
              {/* Details */}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 30,
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h1,
                    fontSize: 25,
                  }}
                >
                  {item.title}
                </Text>

                <Text
                  style={{
                    ...FONTS.body3,
                    textAlign: "center",
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.radius,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
