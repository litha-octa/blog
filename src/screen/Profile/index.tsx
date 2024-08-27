import { Box, Text} from "@chakra-ui/react";
import "./index.css";
import { myData } from "../../assets/MyAssets";
import { Nav } from "../../components/Nav";
import { isMobile } from "react-device-detect";
import { TabBio } from "../../components/TabBio";

const Profile = () => {
  return (
    <Box className="body">
      <Nav/>
     
      <Box className="profile-box" w={isMobile? '100%' : '40%'}>
        <Box className="profile-text-container" >
          <Text className="profile-fullname" fontSize={isMobile ? 40 : 50}>{myData.fullname}</Text>
          <Text className="profile-resume" noOfLines={[1, 2, 3]} fontSize={isMobile ? 20 : 60}>{myData.resume}</Text>
          <Text className="profile-bio" fontSize={isMobile ? 30 : 30}>My Biodata</Text>
          <TabBio/>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
