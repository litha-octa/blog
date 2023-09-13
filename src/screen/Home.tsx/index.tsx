import { Box, Text } from "@chakra-ui/react";
import "./index.css";

const Home = () => {
  return (
    <Box className="body">
      <Box className="box">
        <Text className="hello">Hello</Text>
        <Text className="name">Im Litha</Text>
      </Box>
      <Box className="box2">
        <Text className="quote">
          A free human being is one who is healthy in body and happy in soul.
        </Text>
      </Box>
      <Box onClick={() => {}}>
        <Text className="abt-me">About Me</Text>
      </Box>
    </Box>
  );
};
export default Home;
