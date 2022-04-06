import React from 'react';
import { useState } from 'react';
import { DatePicker } from 'antd';
import { Radio, Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions: string[] = [
  'Cổng 1',
  'Cổng 2',
  'Cổng 3',
  'Cổng 4',
  'Cổng 5',
];
const defaultCheckedListGate = ['Cổng 1'];

export interface IFilterFormProps {
  openForm: any;
}

const FilterForm: React.FunctionComponent<IFilterFormProps> = (
  props: IFilterFormProps
) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedListGate);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: any) => {
    setCheckedList(list);
    setCheckAll(false);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList([]);
    setCheckAll(e.target.checked);
  };

  return (
    <div
      className="form-filter-background"
      onClick={() => props.openForm(false)}
    >
      <div className="form-filter-container">
        <p className="title-form-filter">Lọc vé</p>
        <div className="day-from-expier">
          <div className="day-to">
            <p className="day-filter">Từ ngày</p>
            <DatePicker />
          </div>
          <div className="day-from">
            <p className="day-filter">Đến ngày</p>
            <DatePicker />
          </div>
        </div>
        <div className="status-uses">
          <p className="tittle-status-uses">Tình trạng sử dụng</p>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>Tất cả</Radio>
            <Radio value={2}>Đã sử dụng</Radio>
            <Radio value={3}>Chưa sử dụng</Radio>
            <Radio value={4}>Hết hạn</Radio>
          </Radio.Group>
        </div>
        <div className="checkin-status-use">
          <p className="checkin-status-use-tittle">Cổng check - in</p>
          <div className="flex">
            <Checkbox onChange={onCheckAllChange} checked={checkAll}>
              Tất cả
            </Checkbox>
            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </div>
        </div>

        <button className="btn-filter">Lọc</button>
      </div>
    </div>
  );
};

export default FilterForm;
