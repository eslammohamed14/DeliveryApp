import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";

import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../../constants";
import { HorizontalFoodCard, VerticalFoodCard } from "../../component";
import { FilterModal } from "../";
import { useNavigation } from "@react-navigation/native";

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          marginBottom: 30,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
          >
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      {/* content */}

      {children}
    </View>
  );
};

const Home = ({}) => {
  const navigation = useNavigation();

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([]);

  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  //handle

  const handleChangeCategory = (categoryId, menuTypeId) => {
    ////////////// achieve data from main data then set data ///////////

    //retrieve the popular menu

    let selectPopular = dummyData?.menu.find((a) => a.name == "Popular");

    //retrieve the recommended menu

    let selectRecommended = dummyData?.menu.find(
      (a) => a.name == "Recommended"
    );

    //find the menu based on the menu type id

    let selectedMenu = dummyData?.menu.find((a) => a.id == menuTypeId);

    //set the recommended menu based on the category id

    setPopular(
      selectPopular?.list.filter((a) => a.categories.includes(categoryId))
    );

    //set the recommended menu based on the category id

    setRecommends(
      selectRecommended?.list.filter((a) => a.categories.includes(categoryId))
    );

    //set the menu based on the category id

    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.lightGray2,
          height: 50,
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          alignItems: "center",
        }}
      >
        {/* search icon */}
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.black,
          }}
        />

        {/* text input */}

        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="search food..."
        />

        {/* filter icon */}
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMenuType = () => {
    return (
      <FlatList
        data={dummyData.menu}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 30,
        }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index == dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}
            >
              <Text
                style={{
                  ...FONTS.h3,
                  color:
                    selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  function renderRecommendedSection() {
    return (
      <Section title={"Recommended"}>
        <FlatList
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  height: 180,
                  width: SIZES.width * 0.85,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight:
                    index == recommends.length - 1 ? SIZES.padding : 0,
                  alignItems: "center",
                  padding: 18,
                  paddingRight: 20,
                }}
                imageStyle={{
                  height: 150,
                  width: 150,
                  marginTop: 35,
                }}
                item={item}
              />
            );
          }}
        />
      </Section>
    );
  }

  function renderPopularSection() {
    return (
      <Section title={"Popular Near You"}>
        <FlatList
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <VerticalFoodCard
                containerStyle={{
                  width: SIZES.width * 0.5,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight:
                    index == recommends.length - 1 ? SIZES.padding : 0,
                  alignItems: "center",
                }}
                item={item}
                onPress={() => {
                  console.log(navigation, ".........");
                  navigation?.navigate("FoodDetail");
                }}
              />
            );
          }}
        />
      </Section>
    );
  }

  function renderFoodCategory() {
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: SIZES.base,
                marginLeft: index == 0 ? SIZES.radius : SIZES.padding,
                marginRight:
                  index == dummyData.categories.length - 1 ? SIZES.radius : 0,
                borderRadius: SIZES.radius,
                backgroundColor:
                  selectedCategoryId == item.id
                    ? COLORS.primary
                    : COLORS.lightGray2,
                paddingHorizontal: SIZES.base,
              }}
              onPress={() => {
                setSelectedCategoryId(item.id);
                handleChangeCategory(item.id, selectedMenuType);
              }}
            >
              {/* image */}
              <Image
                style={{
                  width: 50,
                  height: 50,
                  paddingVertical: 10,
                }}
                source={item.icon}
              />
              {/* title */}

              <Text
                style={{
                  ...FONTS.h3,
                  color:
                    selectedCategoryId == item.id
                      ? COLORS.white
                      : COLORS.darkGray,
                  paddingVertical: 10,
                  marginLeft: SIZES.base,
                  alignSelf: "center",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }

  function renderDeliveryTo() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          marginBottom: SIZES.padding,
        }}
      >
        {/* delivery to */}
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
          }}
        >
          Delivery To
        </Text>
        {/* adress */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
          }}
        >
          <Text
            style={{
              ...FONTS.body3,
            }}
          >
            {dummyData?.myProfile.address}
          </Text>
          <Image
            source={icons.down_arrow}
            style={{
              width: 20,
              height: 20,
              marginLeft: SIZES.base,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* search */}

      {renderSearch()}

      {/* filter */}
      {showFilterModal && (
        <FilterModal
          isVisable={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}

      {/* list */}

      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Delivery to */}

            {renderDeliveryTo()}

            {/* Food category */}

            {renderFoodCategory()}

            {/* popular */}

            {renderPopularSection()}
            {/* recommended */}

            {renderRecommendedSection()}

            {/* menu type */}

            {renderMenuType()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
                //backgroundColor:COLORS.lightGray1
              }}
              imageStyle={{
                height: 110,
                width: 110,
                marginTop: 20,
              }}
              item={item}
            />
          );
        }}
        ListFooterComponent={<View style={{ height: 200 }} />}
      />
    </View>
  );
};

export default Home;
