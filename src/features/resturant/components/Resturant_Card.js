import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { styled } from "styled-components";
import { theme } from "../../../constant/theme";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Resturant_Card = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <CardContent>
        <Title>{name}</Title>
        <Row>
          <Stars>
            {ratingArray.map((item) => (
              <Svg key={item} xml={star} width={18} height={18} />
            ))}
          </Stars>
          {isOpenNow && !isClosedTemporarily && (
            <SvgXml xml={open} width={20} height={20} />
          )}
          {isClosedTemporarily && <CloseText>Closed Temporarly</CloseText>}
        </Row>
        <Address>{address}</Address>
      </CardContent>
    </RestaurantCard>
  );
};

export default Resturant_Card;

const Title = styled(Text)`
  color: ${theme.color.ui.primary};
  font-family: ${theme.font.heading};
  font-size: ${theme.fontSize.body};
`;
const Svg = styled(SvgXml)`
  margin-right: 4px;
`;
const CloseText = styled(Text)`
  color: ${theme.color.ui.error};
  font-family: ${theme.font.heading};
  font-size: ${theme.fontSize.body};
`;
const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${theme.space[8]};
  padding-bottom: ${theme.space[8]};
`;
const Stars = styled(View)`
  flex-direction: row;
`;
const Address = styled(Text)`
  color: ${theme.color.ui.primary};
  font-family: ${theme.font.body};
  font-size: ${theme.fontSize.caption};
`;
const RestaurantCard = styled(Card)`
  background-color: ${theme.color.bg.primary};
  margin-bottom: 30px;
  margin: ${theme.space[16]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${theme.space[8]};
  background-color: ${theme.color.bg.primary};
`;
const CardContent = styled(Card.Content)`
  padding: ${theme.space[8]};
`;
