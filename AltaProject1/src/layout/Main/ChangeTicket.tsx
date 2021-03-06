import React from 'react';
import ChangeTicketTable from '../Component/Table/ChangeTicketTable';

export interface IChangeTicketProps {}

const ChangeTicket: React.FunctionComponent<IChangeTicketProps> = (props) => {
  return (
    <div className="change-ticket-container">
      <ChangeTicketTable />
    </div>
  );
};

export default ChangeTicket;
