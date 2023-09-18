import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { myData } from "../../assets/MyAssets";

const Album = () => {
  return (
    <Box>
      <Text>undone development</Text>
      {myData?.catsPic.map((e: string, index: number) => {
        return (
          <Box>
            <Image src={e} alt={`catPic-${index}`} key={index} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Album;
