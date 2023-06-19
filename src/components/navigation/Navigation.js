import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Resturant_Screen from "../../features/resturant/screens/Resturant_Screen";
import Map_Screen from "../../features/map/screen/Map_Screen";
import Setting_Screen from "../../features/setting/screen/Setting_Screen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurant"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Restaurant") {
              iconName = "md-restaurant";
            } else if (route.name === "Settings") {
              iconName = "md-settings";
            } else {
              iconName = "md-map";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Restaurant" component={Resturant_Screen} />
        <Tab.Screen name="Map" component={Map_Screen} />
        <Tab.Screen name="Settings" component={Setting_Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
