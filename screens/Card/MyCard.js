import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
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
  CardItem,
  TextButton,
} from "../../component";
import { useNavigation } from "@react-navigation/native";

const MyCard = () => {
  const navigation = useNavigation();

  const [selectedCard, setSelectedCard] = useState(null);

  ///////render/////////
  function renderHeader() {
    return (
      <Header
        title={"My Card"}
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
        rightComponent={<View style={{ width: 40 }} />}
      />
    );
  }

  function renderMyCards() {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={selectedCard == item.id}
              /* isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              } */
              onPress={() => setSelectedCard(item.id)}
              //onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
            />
          );
        })}
      </View>
    );
  }

  function renderAddNewCrad() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Add new card
        </Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
            />
          );
        })}
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingBottom: SIZES.padding,
          paddingTop: SIZES.radius,
          paddingHorizontal: SIZES.radius,
        }}
      >
        <TextButton
          disabled={selectedCard == null}
          buttonContainerStyle={{
            height: 60,
            backgroundColor:
              selectedCard == null ? COLORS.gray : COLORS.primary,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius,
          }}
          label={selectedCard?.key == "NewCard" ? "Add" : "Place your Order"}
          labelStyle={{
            color: COLORS.white,
          }}
          onPress={() =>
            selectedCard?.key == "NewCard"
              ? "Add"
              : navigation.navigate("AddCard")
          }
        />
      </View>
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

      {/* Card */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* myCards */}
        {renderMyCards()}

        {/* new Cards */}
        {renderAddNewCrad()}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyCard;
