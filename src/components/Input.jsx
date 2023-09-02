import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

function Inputf({ onChangeHandler }) {
  return (
    <InputWrapper
      addonAfter={<SearchOutlined />}
      placeholder="Search campaign name"
      onChange={onChangeHandler}
      id="search-input"
      size="large"
      allowClear={true}
    />
  );
}

const InputWrapper = styled(Input)``;

export default Inputf;
