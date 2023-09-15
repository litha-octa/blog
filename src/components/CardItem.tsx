import React, { FC } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import "./CardItem.css";
import { myData } from "../assets/MyAssets";

type Props = {
  title: string;
  img: any;
  action: () => void;
};

const CardItem: FC<Props> = ({ title, img, action }) => {
  return (
    <Box className="card-body" onClick={action}>
      <Box className="card-circle"></Box>
      <Image src={img || myData.catsPic[0]} className="card-img" />
      <Text className="card-text">{title || "title"}</Text>
    </Box>
  );
};
export default CardItem;
