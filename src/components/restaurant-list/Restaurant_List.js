import React from "react";
import { FlatList, View } from "react-native";
import { styled } from "styled-components";
import Resturant_Card from "../../features/resturant/components/Resturant_Card";
import { theme } from "../../constant/theme";

const Restaurant_List = ({ data }) => {
  return (
    <List>
      <FlatList data={data} renderItem={() => <Resturant_Card />} />
    </List>
  );
};

const List = styled(View)`
  flex: 1;
  background-color: ${theme.color.bg.primary};
`;

export default Restaurant_List;
