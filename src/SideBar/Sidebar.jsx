import "./SideBar.css";
import { motion } from "framer-motion";
import {
  AccountCircleRounded,
  SettingsRemoteRounded,
  TocRounded,
} from "@mui/icons-material";
import { BsMessenger } from "react-icons/bs"
import { HiHome } from "react-icons/hi"
import { FaSearch } from "react-icons/fa"
import { BiSolidVideos, BiSolidAddToQueue, BiMenu } from "react-icons/bi"

// 
import Item from "./Components/item";
import { useState } from "react";
function SideBar({ children }) {
  const [open, setOpen] = useState(true);


  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="App">

      <div style={{display : window.innerWidth <= 767 ? "none" : "block"}} className={`sidebar_container  ${open === true ? "sidebarContainerActive" : "sidebarContainerInActive"}`}>

        <div className={`sidebar ${open === true ? "sidebarActive" : "sidebarInActive"}`}>

          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>

          <div className="profile">
            <img className={`${open === true ? "profileImgActive" : "profileImgInActive"}`}
              src="https://shaheershahzad.web.app/static/media/Profile.23c489d833df89712277.jpg"
              alt="profile_img"
            />
          </div>
          <Item open={open} icon={<HiHome />} name="Home" />
          <Item open={open} icon={<BsMessenger />} name="Messages" />
          <Item open={open} icon={<FaSearch />} name="Search" />
          <Item open={open} icon={<BiSolidVideos />} name="Reels" />
          <Item open={open} icon={<BiSolidAddToQueue />} name="Create" />
          <Item open={open} icon={<AccountCircleRounded />} name="Profile" />
          <Item open={open} icon={<BiMenu />} name="More" />


        </div>


      </div>


      <div className={`body_container ${window.innerWidth <= 767 ?"" :open === true  ? "bodyActive" : "bodyInActive"}`}>

        {children}
      </div>

    </div>
  );
}

export default SideBar;