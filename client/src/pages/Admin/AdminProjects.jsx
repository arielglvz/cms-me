import { Form, Input, message, Modal } from "antd";
import React, { useState } from "react";
import { useForm } from 'antd/lib/form/Form';
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AdminProjects = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");
  const [form] = useForm();

  const onFinish = async (values) => {
    try {
      const tempTechnologies= values?.technologies?.split(",") || [];
      values.technologies = tempTechnologies;
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null)
        dispatch(HideLoading());
        dispatch(ReloadData(true));
        form.resetFields(); 
      } else {
        message.error(response.data.message);
        console.log('second')
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("api/portfolio/delete-projects", { 
        _id: item._id,
      })
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch(error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setShowAddEditModal(true);
            setSelectedItemForEdit(null);
            setType("add");
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project._id}
            className="shadow border-2 p-5 border-gray-400 flex flex-col gap-5"
          >
            <h1 className="text-primary text-xl font-bold">Title: {project.title}</h1>
            <h1 className="text-primary text-xl font-bold">
            <hr />
              {project.period}
            </h1>
            <img src={project.image} alt="" className="h-60 w-full"/>
            <h1>{project.description}</h1>
            <h1>{project.link}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* // ! Problem about the modal and the loading {z-index}
       */}
      { (type === "add" || selectedItemForEdit) &&
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(false);
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues = {selectedItemForEdit ? { ...selectedItemForEdit, technologies: selectedItemForEdit.technologies?.join(", "), } : {}}
          >
            <Form.Item name="title" label="Title">
              <Input placeholder="Title" />
            </Form.Item>

            <Form.Item name="image" label="Image URL">
              <Input placeholder="Image URL" />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input placeholder="Description" />
            </Form.Item>

            <Form.Item name="technologies" label="Technologies">
              <Input placeholder="Technologies" />
            </Form.Item>
            
            <Form.Item name="link" label="Link">
              <Input placeholder="Link" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                type="button"
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(null);
                  setShowAddEditModal(false);
                  form.resetFields();
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      }
    </div>
  );
};

export default AdminProjects
