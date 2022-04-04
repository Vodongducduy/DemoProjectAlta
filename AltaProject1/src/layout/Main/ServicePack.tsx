import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiFilter } from 'react-icons/fi';
import ServicePackTable from '../Component/Table/ServicePackTable';

export interface IServicePackProps {}

const ServicePack: React.FunctionComponent<IServicePackProps> = (props) => {
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
          <button className="btn-filter-csv">Thêm gói vé</button>
        </div>
      </div>
      <ServicePackTable />
    </div>
  );
};

export default ServicePack;
