import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { GoPrimitiveDot } from 'react-icons/go';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase-config';
import { Tickets } from '../../../InterFace/Interface';

const columns = [
  {
    title: 'STT',
    dataIndex: 'key',
  },
  {
    title: 'Booking code',
    dataIndex: 'bookingCode',
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
    title: 'Tình trạng sử dụng',
    key: 'statusTicket',
    dataIndex: 'statusTicket',
    render: (status: string) => {
      let color = '';
      let statusName = '';
      let bg = '';
      switch (status) {
        case 'Chưa sử dụng':
          color = '#03AC00';
          statusName = 'Chưa sử dụng';
          bg = '#DEF7E0';
          break;
        case 'Đã sử dụng':
          color = '#919DBA';
          bg = '#EAF1F8';
          statusName = 'Đã sử dụng';
          break;

        case 'Hết hạn':
          color = '#FD5959';
          statusName = 'Hết hạn';
          bg = '#F8EBE8';
          break;

        default:
          color = '#03AC00';
          statusName = 'Chưa sử dụng';
      }
      return (
        <div
          style={{
            backgroundColor: `${bg}`,
            borderColor: `${color}`,
            color: `${color}`,
          }}
          className="ticket-status"
        >
          <GoPrimitiveDot className="icon" /> {statusName}
        </div>
      );
    },
  },
  {
    title: 'Ngày sử dụng',
    dataIndex: 'dayUser',
  },
  {
    title: 'Ngày xuất vé',
    dataIndex: 'dayUser',
  },
  {
    title: 'Cổng check in',
    dataIndex: 'gate',
  },
];

export interface ITableManagementTicketProps {
  searchInput: string;
  ticketsData: Tickets | any;
}

const TableManagementTicket: React.FunctionComponent<
  ITableManagementTicketProps
> = (props: ITableManagementTicketProps) => {
  const [searchData, setSearchData] = useState<Tickets>();

  useEffect(() => {
    if (props.searchInput) {
      let a = props.ticketsData.filter((item: Tickets) =>
        item.numberTicket.includes(props.searchInput)
      );
      setSearchData(a);
    }
  }, [props.searchInput]);
  console.log('Check', typeof searchData);
  return (
    <Table
      columns={columns}
      dataSource={props.searchInput ? searchData : props.ticketsData}
    />
  );
};

export default TableManagementTicket;
