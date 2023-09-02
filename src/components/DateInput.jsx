import React from "react";
import { DatePicker } from "antd";

function DateInput({ onChange }) {
  const { RangePicker } = DatePicker;
  return (
    <RangePicker
      onCalendarChange={onChange}
      format="MM/DD/YYYY"
      id="date-input"
      style={{ padding: "0.5rem" }}
    />
  );
}

export default DateInput;
