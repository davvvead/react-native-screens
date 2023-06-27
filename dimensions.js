import { Dimensions } from "react-native";

const baseWidth = 360;
const baseHeight = 640;
const baseFontSize = 16;
const baseMargin = 10;
const basePadding = 10;

const getDeviceDimensions = () => {
  const { width, height } = Dimensions.get("window");
  return { width, height };
};

const getResponsiveWidth = (width) => {
  const { width: deviceWidth } = getDeviceDimensions();
  return (width / baseWidth) * deviceWidth;
};

const getResponsiveHeight = (height) => {
  const { height: deviceHeight } = getDeviceDimensions();
  return (height / baseHeight) * deviceHeight;
};

const getResponsiveFontSize = (fontSize) => {
  const { width: deviceWidth } = getDeviceDimensions();
  return (fontSize / baseFontSize) * deviceWidth;
};

const getResponsiveMargin = (margin) => {
  const { width: deviceWidth } = getDeviceDimensions();
  return (margin / baseWidth) * deviceWidth;
};

const getResponsivePadding = (padding) => {
  const { width: deviceWidth } = getDeviceDimensions();
  return (padding / baseWidth) * deviceWidth;
};
export {
  getResponsiveWidth,
  getResponsiveHeight,
  getResponsiveFontSize,
  getResponsiveMargin,
  getResponsivePadding,
};
