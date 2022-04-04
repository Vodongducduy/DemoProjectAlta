import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { DatePicker } from 'antd';

export interface IChangeTicketTableFormProps {}
const radioBtn = [
  {
    tittle: 'Tất cả',
    id: 1,
  },
  {
    tittle: 'Đã đổi soát',
    id: 2,
  },
  {
    tittle: 'Chưa đổi soát',
    id: 3,
  },
];

const ChangeTicketTableForm: React.FunctionComponent<
  IChangeTicketTableFormProps
> = (props) => {
  return (
    <div className="table-filter-ticket-container">
      <p className="table-filter-ticket-title">Lọc vé</p>
      <button className="filter-button">
        <div className="option-filter">
          <p>Hội chợ triển lãm tiêu dùng 2021</p>
          <IoIosArrowDown className="icon-filter-table" />
        </div>
      </button>
      <div className="Status-change-ticket">
        <p className="statust-filter-table">Tình trạng đối soát</p>
        <div className="group-radios">
          {radioBtn.map((value, index) => (
            <div className="container-radio-button" key={index}>
              <input className="text-radios-filter" type="radio" />
              <p className="text-radios-fillter-table">{value.tittle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="type-ticket-filter-table">
        <p className="tittle-type-ticket">Loại vé</p>
        <p className="name-type-ticket">Vé cổng</p>
      </div>
      <div className="from-ticket-filter-table">
        <p className="from-day-ticket-filter-table">Từ ngày</p>
        <DatePicker />
      </div>
      <div className="to-ticket-filter-table">
        <p className="to-day-ticket-filter-table">Đến ngày</p>
        <DatePicker />
      </div>
      <div className="button-filter-table">
        <button className="btn-filter css-filter">Lọc</button>
      </div>
    </div>
  );
};

export default ChangeTicketTableForm;
