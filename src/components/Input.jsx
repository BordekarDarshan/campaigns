import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

function InputComp({ onChangeHandler, id = "" }) {
  return (
    <InputWrapper
      addonAfter={<SearchOutlined />}
      placeholder="Search campaign name"
      onChange={onChangeHandler}
      id={id}
      size="large"
      allowClear={true}
    />
  );
}

const InputWrapper = styled(Input)``;

export default InputComp;
