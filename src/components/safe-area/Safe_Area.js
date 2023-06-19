import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { styled } from "styled-components";

const Safe_Area = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

export default Safe_Area;
