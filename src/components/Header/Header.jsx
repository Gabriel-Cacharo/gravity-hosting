import { BsPersonFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { FaServer, FaHome } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { AiFillCloud } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import LogoImage from "../../assets/images/logo.png";
import AstronautImage from "../../assets/images/astronautImage.png";
import AstronautBot from "../../assets/images/astronautBot.png";
import AstronautMinecraft from "../../assets/images/astronautMinecraft.png";
import AstronautServer from "../../assets/images/astronautServer.png";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hostingMenuAnchor, setHostingMenuAnchor] = useState(null);
  const [serverMenuAnchor, setServerMenuAnchor] = useState(null);

  const [hostingMenuIsOpen, setHostingMenuIsOpen] = useState(false);
  const [serverMenuIsOpen, setServerMenuIsOpen] = useState(false);

  const handleClickHosting = (event) => {
    setHostingMenuAnchor(event.currentTarget);
    setHostingMenuIsOpen(true);
  };

  const handleCloseHosting = () => {
    setHostingMenuIsOpen(false);
    setHostingMenuAnchor(null);
  };

  const handleClickServer = (event) => {
    setServerMenuAnchor(event.currentTarget);
    setServerMenuIsOpen(true);
  };

  const handleCloseServer = () => {
    setServerMenuIsOpen(false);
    setServerMenuAnchor(null);
  };

  return (
    <header className="headerContainer">
      <img src={LogoImage} alt="Logo Image" />

      <nav>
        <ul>
          <li>
            <FaHome className="iconMarginRight" />
            <Link to="/">Inicio</Link>
          </li>

          <li onClick={handleClickHosting}>
            <AiFillCloud className="iconMarginRight" /> Hospedagens
            <MdOutlineKeyboardArrowDown style={{ marginLeft: "3px" }} />
          </li>
          <Menu
            id="hostingMenu"
            anchorEl={hostingMenuAnchor}
            open={hostingMenuIsOpen}
            onClose={handleCloseHosting}
          >
            <Link to="/products/minecraft" style={{ width: "100%" }}>
              <MenuItem onClick={handleCloseHosting}>
                <img src={AstronautMinecraft} alt="" />
                Minecraft
              </MenuItem>
            </Link>
            {/* <Link to="/products/bot" style={{ width: "100%" }}>
              <MenuItem onClick={handleCloseHosting}>
                <img src={AstronautBot} alt="" />
                BotJS
              </MenuItem>
            </Link> */}
          </Menu>

          <li onClick={handleClickServer}>
            <FaServer className="iconMarginRight" /> Servidores
            <MdOutlineKeyboardArrowDown style={{ marginLeft: "3px" }} />
          </li>
          <Menu
            id="serverMenu"
            anchorEl={serverMenuAnchor}
            open={serverMenuIsOpen}
            onClose={handleCloseServer}
          >
            <Link to="/products/vps" style={{ width: "100%" }}>
              <MenuItem onClick={handleCloseServer}>
                <img src={AstronautServer} alt="" className="vpsImage" />
                VPS
              </MenuItem>
            </Link>
          </Menu>

          <li style={{ color: "#aaa" }}>
            <HiOutlineStatusOnline className="iconMarginRight" /> Status
          </li>

          <li>
            <BsFillBookmarkStarFill className="iconMarginRight" />
            <Link to="/terms">Termos</Link>
          </li>
        </ul>
      </nav>

      <button>
        <a
          href="http://cart.gravityhosting.com.br/login"
          style={{ color: "white" }}
        >
          <BsPersonFill className="iconMarginRight" /> Login
        </a>
      </button>
    </header>
  );
};

export default Header;
