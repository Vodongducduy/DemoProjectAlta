import React from 'react';
import { Table } from 'antd';
import ChangeTIcketTableForm from '../Form/ChangeTIcketTableForm';
import { HiOutlineSearch } from 'react-icons/hi';
import { db } from '../../../Firebase/Firebase-config';

const columns = [
  {
    title: 'STT',
    dataIndex: 'key',
  },
  {
    title: 'Số vé',
    dataIndex: 'numberTicket',
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'nameEvent',
  },
  {
    title: 'Ngày sử dụng',
    dataIndex: 'dayUser',
  },
  {
    title: 'Tên loại vé',
    dataIndex: 'nameTicket',
  },
  {
    title: 'Cổng check - in',
    dataIndex: 'gateCheckIn',
  },
  {
    title: '',
    dataIndex: 'status',
  },
];

const data = [
  {
    key: '1',
    numberTicket: 'ALT20210501',
    nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
    dayUser: '14/04/2021',
    nameTicket: 'Vé cổng',
    gateCheckIn: 'Cổng 1',
    status: 'Đã đổi soát',
  },
  {
    key: '2',
    numberTicket: 'ALT20210501',
    nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
    dayUser: '14/04/2021',
    nameTicket: 'Vé cổng',
    gateCheckIn: 'Cổng 1',
    status: 'Đã đổi soát',
  },
  {
    key: '3',
    numberTicket: 'ALT20210501',
    nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
    dayUser: '14/04/2021',
    nameTicket: 'Vé cổng',
    gateCheckIn: 'Cổng 1',
    status: 'Đã đổi soát',
  },
];

export interface IChangeTicketTableProps {}

const ChangeTicketTable: React.FunctionComponent<IChangeTicketTableProps> = (
  props
) => {
  return (
    <div className="change-ticket-table-container">
      <div className="flex-1">
        <p className="change-ticket-header">Đổi soát vé</p>
        <div className="changle-ticket-control">
          <div className="search-box">
            <input placeholder="Tìm bằng số vé" className="search-box-input" />
            <HiOutlineSearch className="search-icon" />
          </div>
          <button className="btn-filter-csv">{'Xuất file (.csv)'}</button>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
      <div className="flex-2">
        <ChangeTIcketTableForm />
      </div>
    </div>
  );
};

export default ChangeTicketTable;
