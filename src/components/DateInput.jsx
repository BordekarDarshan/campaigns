import React from "react";
import { DatePicker } from "antd";

function DateInput({ onChange, id = "" }) {
  const { RangePicker } = DatePicker;
  return (
    <RangePicker
      onCalendarChange={onChange}
      format="MM/DD/YYYY"
      id={id}
      style={{ padding: "0.5rem" }}
    />
  );
}

export default DateInput;
