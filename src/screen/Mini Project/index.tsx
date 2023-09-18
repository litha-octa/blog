import React from "react";
import { Box, Text, Link, Image, Icon } from "@chakra-ui/react";
import "./index.css";
import { miniApp } from "../../assets/MyAssets";
import { LeftArrow } from "../../assets/img";

const MiniProject = () => {
  const Display = ({ item }: any) => {
    const [isCollaps, setIsCollaps] = React.useState(true);
    return (
      <Box className="card-display-body">
        {isCollaps && (
          <Box
            className="card-display"
            onClick={() => {
              setIsCollaps(!isCollaps);
            }}
          >
            <Text className="display-title">{item?.nameApp}</Text>

            {item?.pic?.length > 0 ? (
              <Image src={item?.pic?.[0]} className="img-display" />
            ) : null}
          </Box>
        )}
        {!isCollaps && (
          <Box className="card-desc">
            <Box
              onClick={() => {
                setIsCollaps(!isCollaps);
              }}
            >
              <Image src={LeftArrow} className="icon-back" />
            </Box>
            <Text className="display-title">{item?.nameApp}</Text>

            <Text className="display-desc">Description :</Text>
            <Text className="display-desc">{item?.description}</Text>
            {item?.live && (
              <Link href={item?.live} className="display-link-live">
                <Text>Try App !</Text>
              </Link>
            )}
            {item?.pic?.length > 0 &&
              item?.pic?.map((img: any, index: number) => {
                return (
                  <Image src={img} key={index} className="img-display-desc" />
                );
              })}
          </Box>
        )}
      </Box>
    );
  };
  const Ornament = () => {
    return (
      <Box>
        <Box className="ornament" />
        <Box className="ornament2" />
      </Box>
    );
  };
  return (
    <Box>
      <Ornament />
      <Box className="body">
        <Text className="title-mini-app">Mini Program</Text>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {miniApp?.map((item: any, index: number) => {
            return <Display item={item} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default MiniProject;
