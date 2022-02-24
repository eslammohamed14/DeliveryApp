import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LocalStorage } from "./constants";

import CustomDrawer from "./navigation/CustomDrawer";

import { OnBoarding, SignIn, SignUp, ForgotPassword, Otp } from "./screens";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    LocalStorage.getData("Token").then((id) => {
      setToken(id);
    });
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {token == null || token == undefined ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"OnBoarding"}
          >
            <Stack.Screen name="OnBoarding" component={OnBoarding} />

            <Stack.Screen name="SignIn" component={SignIn} />

            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            <Stack.Screen name="Otp" component={Otp} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"Home"}
          >
            <Stack.Screen name="Home" component={CustomDrawer} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
