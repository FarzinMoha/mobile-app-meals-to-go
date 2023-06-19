import React from "react";
import { theme } from "../../constant/theme";
import { View } from "react-native";
import { styled } from "styled-components";
import { Searchbar } from "react-native-paper";

const Search_Box = ({ setSearchQuery }) => {
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SearchBox>
      <Searchbar onChangeText={onChangeSearch} />
    </SearchBox>
  );
};
const SearchBox = styled(View)`
  padding: ${theme.space[16]};
  background-color: ${theme.color.bg.primary};
`;

export default Search_Box;
