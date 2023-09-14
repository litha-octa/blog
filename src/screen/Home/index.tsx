import { Box, Text } from "@chakra-ui/react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box className="body">
      <Box className="box">
        <Text className="home-hello">Hello</Text>
        <Text className="home-name">Im Litha</Text>
      </Box>
      <Box className="box2">
        <Text className="home-quote">
          A free human being is one who is healthy in body and happy in soul.
        </Text>
      </Box>
      <Box
        onClick={() => {
          navigate("/profile");
        }}
      >
        <Text className="abt-me">About Me</Text>
      </Box>
    </Box>
  );
};
export default Home;
