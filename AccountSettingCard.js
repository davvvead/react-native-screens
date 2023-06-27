import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, View, Image, Icon, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";

function AccountSettingCard() {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ffffff",
        alignContent: "center",
        justifyContent: "space-between",
        padding: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <AntDesign name="BookOutlined" size={24} color="black" />
        <View
          style={{
            flexDirection: "column",
            marginLeft: 3,
          }}
        >
          <Text variant="titleMedium">Title</Text>
          <Text variant="bodySmall">Description</Text>
        </View>
      </View>
      <AntDesign name="right" size={24} color="black" />
    </View>
  );
}

export default React.memo(AccountSettingCard);
