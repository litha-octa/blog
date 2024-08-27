import { Box, Text, Link} from "@chakra-ui/react";
import "./index.css";
import { Nav } from "../../components/Nav";
import { myData } from "../../assets/MyAssets";
import { MobileView, isMobile } from "react-device-detect";

const Home = () => {
  
  return (
    <Box className="body">
      <Nav/>
      <Box className="box">
        <Text className="home-hello" fontSize={isMobile ? 40 : 70}>Hello, </Text>
        <Text className="home-name" fontSize={isMobile ? 40 : 70}>Im {myData?.name}</Text>
      </Box>
      <Box className="box">
        <Text className="home-quote" fontSize={isMobile ? 20 : 50}>
          {myData?.role}
        </Text>
      </Box>
      <MobileView>
        <Box className="box-mobile-view">
        <Link href='#/profile' className="abt-me">About Me</Link>
        <Text className="abt-me">Project</Text>
        <Text className="abt-me">Resume</Text>
        <Text className="abt-me">Contact</Text>
        </Box>
      </MobileView>
    </Box>
  );
};
export default Home;
