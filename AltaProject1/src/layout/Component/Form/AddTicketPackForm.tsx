import React from 'react';
import calendar from '../../Img/calendar.svg';
import coclock from '../../Img/Clock.svg';
import downArrow from '../../Img/down-arrow.svg';

export interface IAddTicketPackFormProps {
  closeAddTicketForm: any;
}

const AddTicketPackForm: React.FunctionComponent<IAddTicketPackFormProps> = (
  props: IAddTicketPackFormProps
) => {
  return (
    <div className="add-ticket-pack-form-background">
      <div className="add-ticket-pack-form-container">
        <p className="add-ticket-pack-form-tittle">Thêm gói vé</p>
        <div className="add-ticket-pack-form-input">
          <p>
            Tên gói vé <span>*</span>
          </p>
          <input placeholder="Nhập tên gói vé" />
        </div>
        <div className="day-exper-appy">
          <div className="day-appy">
            <p>Ngày áp dụng</p>
            <div className="calander-apply">
              <div className="calander-day">
                <input />
                <img src={calendar} />
              </div>
              <div className="calander-hour">
                <input />
                <img src={coclock} />
              </div>
            </div>
          </div>
          <div className="day-exper">
            <p>Ngày hết hạn</p>
            <div className="calander-exper">
              <div className="calander-day">
                <input />
                <img src={calendar} />
              </div>
              <div className="calander-hour">
                <input />
                <img src={coclock} />
              </div>
            </div>
          </div>
        </div>
        <div className="price-ticket-apply">
          <p className="price-ticket-apply-tittle">Giá vé áp dụng</p>
          <div className="price-ticket-single">
            <input type="checkbox" className="checkbox-input" />
            <p>{`Vé lẻ (vnđ/vé) với giá`}</p>
            <input placeholder="Giá vé" className="text-input" />
            <span>{' / vé'}</span>
          </div>
          <div className="price-ticket-combo">
            <input type="checkbox" className="checkbox-input" />
            <p>{`Combo với giá vé`}</p>
            <input placeholder="Giá vé" className="text-box-1" />
            <span>{'/'}</span>
            <input placeholder="Giá vé" className="text-box-2" />
            <span>{'  vé'}</span>
          </div>
        </div>
        <div className="status-add-ticket">
          <p className="status-add-ticket-tittle">Tình trạng vé</p>
          <button className="selection-option">
            <p>Đang áp dụng</p>
            <img src={downArrow} alt="downArrow" />
          </button>
          <p className="notify">
            <span>*</span>Là thông tin bắt buộc
          </p>
        </div>
        <div className="btn-save-cancel">
          <button
            onClick={() => {
              props.closeAddTicketForm(false);
            }}
            className="btn-cancel"
          >
            Hủy
          </button>
          <button className="btn-save">Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default AddTicketPackForm;
