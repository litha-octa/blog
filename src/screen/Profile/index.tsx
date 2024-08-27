import { Box, Text, Image, Link } from "@chakra-ui/react";
import "./index.css";
import { myData } from "../../assets/MyAssets";
import { WAIcon, EmailIcon, LinkedinIcon } from "../../assets/img";
import { Nav } from "../../components/Nav";

const Profile = () => {
  return (
    <Box className="body">
      <Nav/>
     
      <Box className="profile-box">
       
        <Box className="profile-text-container">
          <Text className="profile-fullname">{myData.fullname}</Text>
          <Text className="profile-resume" noOfLines={[1, 2, 3]} fontSize={'md'}>{myData.resume}</Text>
          <Box className="profile-contact-box">
            <Text className="profile-contact-text">Contact me</Text>
            
            <Box>
              <Link href={myData.email} isExternal>
                <Image src={EmailIcon} className="icon-contact" />
              </Link>
              <Link href={myData.wa} isExternal>
                <Image src={WAIcon} className="icon-contact" />
              </Link>
              <Link href={myData.linkedin} isExternal>
                <Image src={LinkedinIcon} className="icon-contact" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
