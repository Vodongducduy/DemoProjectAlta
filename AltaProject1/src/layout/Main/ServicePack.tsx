import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiFilter } from 'react-icons/fi';
import { useState } from 'react';
import ServicePackTable from '../Component/Table/ServicePackTable';
import AddTicketPackForm from '../Component/Form/AddTicketPackForm';

export interface IServicePackProps {}

const ServicePack: React.FunctionComponent<IServicePackProps> = (props) => {
  const [openAddTicketForm, setOpenAddTicketForm] = useState(false);
  return (
    <div className="service-pack-container">
      <p className="service-pack-header">Danh sách vé</p>
      <div className="service-pack-control">
        <div className="search-box">
          <input placeholder="Tìm bằng số vé" className="search-box-input" />
          <HiOutlineSearch className="search-icon" />
        </div>
        <div className="filter-button">
          <button className="btn-filter">
            <FiFilter className="filter-icon" />
            <p>Lọc vé</p>
          </button>
          <button
            onClick={() => setOpenAddTicketForm(!openAddTicketForm)}
            className="btn-filter-csv"
          >
            Thêm gói vé
          </button>
        </div>
      </div>
      <ServicePackTable />
      {openAddTicketForm && (
        <AddTicketPackForm closeAddTicketForm={setOpenAddTicketForm} />
      )}
    </div>
  );
};

export default ServicePack;
