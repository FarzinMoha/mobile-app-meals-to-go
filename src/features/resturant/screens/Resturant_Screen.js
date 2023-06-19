import React from "react";
import Search_Box from "../../../components/search-box/Search_Box";
import Restaurant_List from "../../../components/restaurant-list/Restaurant_List";
import Safe_Area from "../../../components/safe-area/Safe_Area";

const Resturant_Screen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const data = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
  ];
  return (
    <>
      <Search_Box setSearchQuery={setSearchQuery} />
      <Restaurant_List data={data} />
    </>
  );
};

export default Resturant_Screen;
