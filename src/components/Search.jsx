import React from "react";
import { useDispatch } from "react-redux";
import { addQuery } from "../features/campaigns/searchSlice";
import DateInput from "./DateInput";
import Input from "./Input";

function Search() {
  let dispatch = useDispatch();
  let timer = null;

  const onSearchCampaign = (e) => {
    const value = e.target.value;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(
      () => dispatch(addQuery({ id: "name", data: value })),
      1000
    );
  };

  const dateRangeChange = (_value, dateString) => {
    dispatch(addQuery({ id: "range", data: dateString }));
  };

  return (
    <div>
      <DateInput onChange={dateRangeChange} />
      <Input onChangeHandler={onSearchCampaign} />
    </div>
  );
}

export default Search;
