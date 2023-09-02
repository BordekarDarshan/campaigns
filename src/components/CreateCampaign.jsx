import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DateInput from "./DateInput";
import { addCampaign } from "../features/campaigns/campaignSlice";
const { Option } = Select;

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
function CreateCampaign({ onClose }) {
  let {
    campaignsReducer: { userList },
  } = useSelector(({ campaignsReducer }) => ({
    campaignsReducer,
  }));

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);

  const onFinish = (values) => {
    let [startDate, endDate] = values.range;
    let payload = {
      endDate,
      startDate,
      ...values,
      userName: userList[values.userId],
    };
    dispatch(addCampaign({ data: payload }));
    form.resetFields();
    onClose();
  };

  useEffect(() => {
    const list = Object.keys(userList).map((data) => ({
      key: data,
      value: userList[data],
    }));
    setOptions(list);
  }, []);

  return (
    <Form
      layout="vertical"
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="name"
        label="Campaign Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="userId" label="Select User">
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          {Array.isArray(options) &&
            options.map((user) => (
              <Option key={user.key} value={user.key}>
                {user.value}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="range"
        label="Start and end date"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DateInput
          onChange={(data, string) => form.setFieldValue("range", string)}
        />
      </Form.Item>
      <Form.Item
        name="Budget"
        label="Budget"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="In USD" type="number" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Create Campaign
        </Button>
      </Form.Item>
    </Form>
  );
}
export default CreateCampaign;
