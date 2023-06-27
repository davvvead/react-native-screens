import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Pressable, View, Image, Icon, SafeAreaView } from "react-native";
import DefaultView from "./DefaultView";
import { PaperProvider } from "react-native-paper";
import AccountSettingCard from "./AccountSettingCard";

import { Text } from "react-native-paper";

export function AccountTypeCard() {
  return (
    <DefaultView>
      <View>
        <Pressable>
          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 10,
              padding: 10,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <View>
                {/* Custom Image component- <AppImage/> */}
                <Image
                  source={require("./pic.jpg")}
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text variant="titleMedium">Title</Text>
                  <Text variant="bodySmall">Description</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <AntDesign name="right" size={24} color="black" />
              </View>
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
        ></View>
      </View>
    </DefaultView>
  );
}
