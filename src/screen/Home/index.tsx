import { Box, Text} from "@chakra-ui/react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { myData } from "../../assets/MyAssets";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box className="body">
      <Nav/>
      <Box className="box">
        <Text className="home-hello">Hello, </Text>
        <Text className="home-name">Im {myData?.name}</Text>
      </Box>
      <Box className="box">
        <Text className="home-quote">
          {myData?.role}
        </Text>
      </Box>
      
    </Box>
  );
};
export default Home;
