import React from "react";
import { DatePicker } from "antd";

function DateInput({ onChange }) {
  const { RangePicker } = DatePicker;
  return <RangePicker onCalendarChange={onChange} format="MM/DD/YYYY" />;
}

export default DateInput;
