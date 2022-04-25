import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/Sibar';
import { Routes, Route } from 'react-router';
import Header from '../Header/Header';
import Dasboard from './Dashboard';
import ManagementTicket from './ManagementTicket';
import ChangeTicket from './ChangeTicket';
import ServicePack from './ServicePack';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase-config';
import { Tickets } from '../../InterFace/Interface';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [ticketsData, setTicketsData] = useState<Tickets | any>();

  useEffect(() => {
    const getAllTickets = async () => {
      await onSnapshot(collection(db, 'tickets'), (snapshot) => {
        const tickets: any = [];
        snapshot.forEach((doc) => {
          tickets.push(doc.data());
        });
        setTicketsData(tickets.sort((a: any, b: any) => a.key - b.key));
      });
    };

    getAllTickets();
  }, []);
  console.log(ticketsData);
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
              element={<ManagementTicket ticketsData={ticketsData} />}
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
