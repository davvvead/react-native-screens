import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, View, Text, Pressable } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import DefaultView from "./DefaultView";
import AccountSettingCard from "./AccountSettingCard";

function AccountSettings() {
  return (
    <>
      {/* <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <View style={{ flexDirection: "column" }}>
          <ActivityIndicator color={"#0000ff"}></ActivityIndicator>
          <Text variant="headlineSmall">Loading...</Text>
        </View>
      </View> */}

      {/* Main screen */}
      {/* <Appbar title="Account Settings" /> */}
      <DefaultView>
        <View style={{ paddingHorizontal: 1 }}>
          <Pressable>
            <View style={{ backgroundColor: "#FFFFFF", padding: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Avatar.Image
                    size={40}
                    source={{
                      uri: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text variant="titleMedium">Name</Text>
                    <Text variant="bodySmall">+233 55 847 7421 1</Text>
                  </View>
                </View>
                <AntDesign name="right" size={7} color="black" />
              </View>
            </View>
          </Pressable>

          <View
            style={{
              flexDirection: "column",
              marginVertical: 3,
              backgroundColor: "#ffffff",
              borderRadius: 10,
            }}
          >
            <AccountSettingCard />
          </View>
          <Pressable>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <AntDesign name="logout" size={24} color="#36474F" />
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 3,
                  }}
                >
                  <Text variant="bodyMedium" style={{ color: "#36474F" }}>
                    Log out
                  </Text>
                </View>
              </View>
              <AntDesign name="right" size={7} color="black" />
            </View>
          </Pressable>
        </View>
      </DefaultView>
    </>
  );
}

export default AccountSettings;
