import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { GoPrimitiveDot } from 'react-icons/go';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase-config';

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

const data = [
  {
    key: '1',
    nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
    bookingCode: 'ALTFGHJU',
    numberTicket: 123456789034,
    dayUser: '14/04/2021',
    statusTicket: 'Đã sử dụng',
    gate: 'Cổng 1',
  },
  {
    key: '2',
    nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
    bookingCode: 'ALTOJMNB',
    numberTicket: 236784631642,
    dayUser: '14/04/2021',
    statusTicket: 'Chưa sử dụng',
    gate: '-',
  },
  {
    key: '3',
    nameEvent: 'Hội chợ triển lãm tiêu dùng 2021',
    bookingCode: 'ALTQTYJH',
    numberTicket: 487621489474,
    dayUser: '14/04/2021',
    statusTicket: 'Hết hạn',
    gate: '-',
  },
];

export interface ITableManagementTicketProps {}

const TableManagementTicket: React.FunctionComponent<
  ITableManagementTicketProps
> = (props) => {
  const [ticketsData, setTicketsData] = useState();

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
  return <Table columns={columns} dataSource={ticketsData} />;
};

export default TableManagementTicket;
