import React from "react";
import { Form, Input, Button } from "antd";
const { TextArea } = Input;
import { useSelector, useDispatch } from "react-redux";

const AdminIntro = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    alert("Form Submitted Successfully!");
  };
  

  return (
    <div>
      <Form 
        onFinish={onFinish} 
        layout="vertical" 
        initialValues={portfolioData?.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <Button className="px-10 py-2 bg-primary text-white" htmlType="submit">SAVE</Button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
