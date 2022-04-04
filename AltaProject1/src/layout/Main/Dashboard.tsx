import React from 'react';

export interface IDasboardProps {}

const Dasboard: React.FunctionComponent<IDasboardProps> = (props) => {
  return (
    <div className="dasboard-container">
      <p className="tittle-dasboard">Thống kê</p>
      <div className="revenue-dasboard">
        <p className="tittle-revenue">Doanh thu</p>
      </div>
      <div className="total-revenue-week">
        <p className="total-revenue-week-tittle">Tổng doanh thu theo tuần</p>
        <p className="total-revenue-week-value">
          525.145.00 <span>đồng</span>
        </p>
      </div>
    </div>
  );
};

export default Dasboard;
