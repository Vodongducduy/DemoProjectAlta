import React from 'react';
import Sidebar from '../SideBar/Sibar';
import { Routes, Route } from 'react-router';
import Header from '../Header/Header';
import Dasboard from './Dashboard';
import ManagementTicket from './ManagementTicket';
import ChangeTicket from './ChangeTicket';
import ServicePack from './ServicePack';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="body">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/Dashboard" element={<Dasboard />}></Route>
            <Route
              path="/ManagementTicket"
              element={<ManagementTicket />}
            ></Route>
            <Route path="/ChangeTicket" element={<ChangeTicket />}></Route>
            <Route path="/ServicePack" element={<ServicePack />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
