import React from 'react';
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiFilter } from 'react-icons/fi';
import FilterForm from '../Component/Form/FilterForm';
import ManagementTable from '../Component/Table/ManagementTable';

export interface IManagementTicketProps {}

const ManagementTicket: React.FunctionComponent<IManagementTicketProps> = (
  props
) => {
  const [openForm, setOpenForm] = useState(false);
  function handleClick() {
    setOpenForm(!openForm);
  }

  return (
    <div className="management-ticket-container">
      <p className="management-ticket-header">Danh sách vé</p>
      <div className="management-ticket-control">
        <div className="search-box">
          <input placeholder="Tìm bằng số vé" className="search-box-input" />
          <HiOutlineSearch className="search-icon" />
        </div>
        <div className="filter-button" onClick={() => handleClick()}>
          <button className="btn-filter">
            <FiFilter className="filter-icon" />
            <p>Lọc vé</p>
          </button>
          <button className="btn-filter-csv">{'Xuất file (.csv)'}</button>
        </div>
      </div>
      <ManagementTable />
      {openForm && <FilterForm openForm={setOpenForm} />}
    </div>
  );
};

export default ManagementTicket;
