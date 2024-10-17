import React from "react";
import { Box, Text, Link, Image } from "@chakra-ui/react";
import "./index.css";
import { miniApp } from "../../assets/MyAssets";
import { LeftArrow } from "../../assets/img";
import { Nav } from "../../components/Nav";

const MiniProject = () => {
  return (
    <div className="body">
      <Nav currentPage={'project'}/>
      <div className="title-mini-app">Project</div>
      <Box className="card-display-body">
        {miniApp?.map((app)=>{
          return(
            <Box>
              <div className="card-title">{app?.name}</div>
              <div className="card-desc">{app?.description}</div>
              <Link href={app?.live} className="card-desc">Try App</Link>
              {/* <Image src={app?.pic?.[0]}/> */}
            </Box>
          )
        })}
      </Box>

    </div>
  );
};

export default MiniProject;
