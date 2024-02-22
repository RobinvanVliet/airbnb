import { Tabs } from "expo-router";
import React from "react"
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle:{
        fontFamily: 'mo-sb'
      }
    }}>
    <Tabs.Screen 
      name="index" 
      options={{
        tabBarLabel: "Explore",
        tabBarIcon:({ color, size }) => 
          <FontAwesome5 
            name='search' 
            color={color}
            size={size}
          />
      }}
      />
    <Tabs.Screen 
      name="whishlists" 
      options={{
        tabBarLabel: "Whishlists",
        tabBarIcon:({ color, size }) => 
          <Ionicons 
            name='heart-outline' 
            color={color}
            size={size}
          />
        }}
      />
      <Tabs.Screen 
        name="trips" 
        options={{
          tabBarLabel: "Trips",
          tabBarIcon:({ color, size }) => 
            <Ionicons 
              name='heart-outline' 
              color={color}
              size={size}
            />
          }}
        />
      <Tabs.Screen 
        name="inbox" 
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon:({ color, size }) => 
            <MaterialCommunityIcons 
              name='message-outline' 
              color={color}
              size={size}
            />
          }}
        />
      <Tabs.Screen 
        name="profile" 
        options={{
          tabBarLabel: "Profile",
          tabBarIcon:({ color, size }) => 
            <Ionicons 
              name='person-circle-outline' 
              color={color}
              size={size}
            />
          }}
        />
  </Tabs>
  )
};

export default Layout;
