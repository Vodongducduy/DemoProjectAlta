import React from 'react';
import Logo from '../Img/LoginSight.svg';
import { BiHomeAlt } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';
import { RiNewspaperLine } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <div className="sibar-container">
      <img src={Logo} alt="logo" />
      <div className="menu-sibar">
        <Link to="/Dashboard">
          <div className="menu-sibar-item">
            <BiHomeAlt className="sibar-icon" />
            <p>Trang chủ</p>
          </div>
        </Link>
        <Link to="/ManagementTicket">
          <div className="menu-sibar-item">
            <HiOutlineTicket className="sibar-icon" />
            <p>Quản lý vé</p>
          </div>
        </Link>
        <Link to="/ChangeTicket">
          <div className="menu-sibar-item">
            <RiNewspaperLine className="sibar-icon" />
            <p>Đối soát vé</p>
          </div>
        </Link>
        <div className="menu-sibar-item">
          <AiOutlineSetting className="sibar-icon" />
          <p>Cài đặt</p>
        </div>
        <Link to="/ServicePack">
          <div className="service-pack">
            <p>gói dịch vụ</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
