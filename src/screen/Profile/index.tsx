import { Box, Text, Image, Link } from "@chakra-ui/react";
import "./index.css";
import CardItem from "../../components/CardItem";
import { myData } from "../../assets/MyAssets";
import { WAIcon, EmailIcon, LinkedinIcon } from "../../assets/img";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Box className="profile-body">
      <Box
        className="profile-nav"
        backgroundPosition="center"
        filter="grayscale(10%)"
        backgroundImage={`url(${myData.navPic})`}
      ></Box>
      <Box className="profile-box">
        <Image
          className="profile-pic"
          src={myData.profilePic}
          alt="drive image"
        />
        <Box className="profile-text-container">
          <Text className="profile-fullname">{myData.fullname}</Text>
          <Text className="profile-resume">{myData.resume}</Text>
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
      <Box className="profile-bottom-container">
        <CardItem
          title="Mini Program"
          img={
            "https://tse3.mm.bing.net/th?id=OIP.AoGRRPtkaI-93757ZJKKKgHaFE&pid=Api&P=0&h=180"
          }
          action={() => navigate("/Mini-Program")}
        />
        <CardItem
          title="Cats Album"
          img={myData.catsPic[1]}
          action={() => navigate("/Album")}
        />
      </Box>
    </Box>
  );
};

export default Profile;
