import React from "react";
import { useDispatch } from "react-redux";
import { addQuery } from "../features/campaigns/searchSlice";
import DateInput from "./DateInput";
import Input from "./Input";
import Card from "./Card";
import { styled } from "styled-components";
import Label from "./Label";

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
    <Card alignment="end">
      <Col>
        <Label linkid="date-input" text="Search by date range"></Label>
        <DateInput onChange={dateRangeChange} id="date-input" />
      </Col>
      <Col>
        <Label linkid="search-input" text="Search Campaign name"></Label>
        <Input onChangeHandler={onSearchCampaign} id="search-input" />
      </Col>
    </Card>
  );
}
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Search;
