import { Box, Text, Link, Image, Button} from "@chakra-ui/react";
import "./index.css";
import { Nav } from "../../components/Nav";
import { myData } from "../../assets/MyAssets";
import { MobileView, isMobile } from "react-device-detect";
import { EmailIcon, GithubLogo, LinkedinIcon } from "../../assets/img";

const Home = () => {
  
  return (
    <Box className="body">
      <Nav currentPage={'home'}/>
      <Box className="box">
        <Text className="home-hello" fontSize={isMobile ? 40 : 70}>Hello, </Text>
        <Text className="home-name" fontSize={isMobile ? 40 : 70}>Im {myData?.name}</Text>
      </Box>
      <Box className="box">
        <Text className="home-quote" fontSize={isMobile ? 20 : 50}>
          {myData?.role}
        </Text>
      </Box>
      <Box className="contact-box">
        <Link href={myData?.linkedin} className="contact-btn">
          <Image src={LinkedinIcon} alt={'linkedin logo'} className="icon-contact"/>
        </Link>
        <Link href={myData?.email} className="contact-btn" >
          <Image src={EmailIcon} alt={'email logo'} className="icon-contact"/>
        </Link>
        <Link href={myData?.github} className="contact-btn" >
          <Image src={GithubLogo} alt={'github logo'} className="icon-contact"/>
        </Link>
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
