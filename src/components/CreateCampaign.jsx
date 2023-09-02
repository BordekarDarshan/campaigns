import React from "react";
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
function CreateCampaign() {
  let {
    campaignsReducer: { userList, campaignsList },
  } = useSelector(({ campaignsReducer }) => ({
    campaignsReducer,
  }));

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    let payload = {
      name: values.name,
      startDate: values.range[0],
      endDate: values.range[1],
      Budget: values.Budget,
      userId: values.userId,
    };
    dispatch(addCampaign({ data: payload }));
    form.resetFields();
  };

  console.log({ campaignsList });

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
          {userList.length > 0 &&
            userList?.map((user) => (
              <Option key={user.id} value={user.id}>
                {user.name}
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
