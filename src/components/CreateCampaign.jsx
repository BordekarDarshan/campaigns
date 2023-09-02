import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DateInput from "./DateInput";
import { addCampaign } from "../features/campaigns/campaignSlice";
import { addCampaignHandler } from "../utils/helper";
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
    try {
      const campaignObj = addCampaignHandler(values, userList);
      if (campaignObj) {
        dispatch(addCampaign({ data: campaignObj }));
        form.resetFields();
        onClose();
      }
    } catch (error) {
      console.log("O_F_I_O", error);
      form.resetFields();
    }
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
        label="Campaign name"
        rules={[
          {
            required: true,
            message: "Campaign name is required.",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="userId"
        label="Select user"
        rules={[
          {
            required: true,
            message: "Please choose an option.",
          },
        ]}
      >
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
        label="Start and end date of the campaign"
        htmlFor="create-campaign-date"
        rules={[
          {
            required: true,
            message: "Please select start and end date of the campaign.",
          },
        ]}
      >
        <DateInput
          id="create-campaign-date"
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
      <Form.Item {...tailLayout} style={{ marginTop: "1rem" }}>
        <Button type="primary" htmlType="submit">
          + Create Campaign
        </Button>
      </Form.Item>
    </Form>
  );
}
export default CreateCampaign;
