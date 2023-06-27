import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "react-native-paper";
import {
  getResponsiveWidth,
  getResponsiveHeight,
  getResponsiveFontSize,
  getResponsiveMargin,
  getResponsivePadding,
} from "./dimensions";

/**
 * @param children
 * @param theme react-native-paper theme
 * @param background
 * @param barStyle
 * @param keyboardAvoidView
 * @param styleView
 * @returns {*}
 * @constructor
 */
function DefaultView({
  children,
  background,
  barStyle,
  keyboardAvoidView,
  styleView,
  keyboard,
}) {
  const { colors } = useTheme();

  const responsiveWidth = getResponsiveWidth(300);
  const responsiveHeight = getResponsiveHeight(200);
  const responsivePadding = getResponsivePadding(40);
  const responsiveMargin = getResponsiveMargin(20);
  const responsiveFont = getResponsiveFontSize(1.5);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={background || "#eeeeee"}
        animated
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled={keyboardAvoidView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={[
              {
                flex: 1,
                paddingTop:
                  Platform.OS === "ios"
                    ? responsivePadding * 0.2
                    : responsivePadding,
              },
              { backgroundColor: background || "#eeeeee" },
              styleView,
            ]}
          >
            {children}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default DefaultView;
