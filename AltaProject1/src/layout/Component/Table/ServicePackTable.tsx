import React from 'react';
import { Table } from 'antd';
import { GoPrimitiveDot } from 'react-icons/go';

const columns = [
  {
    title: 'STT',
    dataIndex: 'key',
  },
  {
    title: 'Mã gói vé ',
    dataIndex: 'bookingCode',
  },
  {
    title: 'Ngày áp dụng',
    dataIndex: 'dayAplly',
  },
  {
    title: 'Ngày hết hạn',
    dataIndex: 'dayExper',
  },
  {
    tittle: 'Tên gói vé',
    dataIndex: 'nameTicket',
  },
  {
    title: 'Giá vé (VNĐ/Vé)',
    dataIndex: 'priceTicket',
  },
  {
    title: 'Giá vé Combo (VNĐ/Combo)',
    dataIndex: 'comboPrice',
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
        case 'Đang áp dụng':
          color = '#03AC00';
          statusName = 'Đang áp dụng';
          bg = '#DEF7E0';
          break;
        case 'Đã sử dụng':
          color = '#919DBA';
          bg = '#EAF1F8';
          statusName = 'Đã sử dụng';
          break;

        case 'Tắt':
          color = '#FD5959';
          statusName = 'Tắt';
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
    title: '',
    dataIndex: 'gate',
  },
];

const data = [
  {
    key: '1',
    nameTicket: 'Gói gia đình',
    bookingCode: 'ALTFGHJU',
    numberTicket: 123456789034,
    dayAplly: '14/04/2021',
    dayExper: '14/04/2021',
    priceTicket: '90.000 VNĐ',
    comboPrice: '360.000 VNĐ/4 Vé',
    statusTicket: 'Đang áp dụng',
  },
  {
    key: '2',
    nameTicket: 'Gói sự kiện',
    bookingCode: 'ALTOJMNB',
    numberTicket: 236784631642,
    dayAplly: '14/04/2021',
    dayExper: '14/04/2021',
    priceTicket: '200.000 VNĐ',
    comboPrice: '-',
    statusTicket: 'Tắt',
  },
];

export interface IServicePackTableProps {}

const ServicePackTable: React.FunctionComponent<IServicePackTableProps> = (
  props
) => {
  return <Table columns={columns} dataSource={data} />;
};

export default ServicePackTable;
