import { Button, Form, Input, message, Modal } from "antd";
import React, { useState } from "react";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Experiences = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      const response = await axios.post(
        '/api/portfolio/add-experience',
        values
      );
      dispatch(HideLoading())
      if(response.data.success) {
        message.success(response.data.message)
        setShowAddEditModal(false);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message)
      }
    } catch(error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience) => (
          <div
            key={experience._id}
            className="shadow border-2 p-5 border-gray-400 flex flex-col"
          >
            <h1 className="text-primary text-xl font-bold">
              {experience.period}
            </h1>
            <hr />
            <h1>Company: {experience.company}</h1>
            <h1>Role: {experience.title}</h1>
            <h1>{experience.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button className="bg-red-500 text-white px-5 py-2">
                Delete
              </button>
              <button className="bg-primary text-white px-5 py-2">Edit</button>
            </div>
          </div>
        ))}
      </div>
      {/* // ! Problem about the modal and the loading {z-index}
      */}
      <Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => setShowAddEditModal(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="period" label="Period">
            <Input placeholder="Period" />
          </Form.Item>

          <Form.Item name="company" label="Company">
            <Input placeholder="Company" />
          </Form.Item>

          <Form.Item name="title" label="Title">
            <Input placeholder="Title" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input placeholder="Description" />
          </Form.Item>

          <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => setShowAddEditModal(false)}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-5 py-2">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Experiences;
