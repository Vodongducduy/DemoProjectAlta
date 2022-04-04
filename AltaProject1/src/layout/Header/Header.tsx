import React from 'react';
import { HiOutlineSearch, HiOutlineMail } from 'react-icons/hi';
import { FiBell } from 'react-icons/fi';
import user from '../Img/User.svg';

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="header-container">
      <div className="search-box">
        <input placeholder="Search" className="search-box-input" />
        <HiOutlineSearch className="search-icon" />
      </div>
      <div className="user-notify">
        <HiOutlineMail className="email-icon" />
        <FiBell className="email-icon" />
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
