import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {  Form, Input, Modal } from 'antd';
import {  EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { URL } from './config';


const Dialog = ({prevUser}) => {
    // const URL='https://jsonplaceholder.typicode.com/users'
    const [userID,setUserID]=useState(prevUser.id)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

//   const handleOk = () => {
    // setIsModalOpen(false);
//   };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [name,setName]=useState(prevUser.name)
  const [email,setEmail]=useState(prevUser.email)
  const [phone,setPhone]=useState(prevUser.phone)
  const [website,setWebsite]=useState(prevUser.website)
  const [address,setAddress]=useState(prevUser.address) 
  const [company,setCompany]=useState(prevUser.company)
  const [username,setUsername]=useState(prevUser.username)
  const [avatar,setAvatar]=useState(prevUser.avatar)
  const [favorite,setFavorite]=useState(prevUser.favorite)
  const updateUser = () =>
    axios
      .put(`${URL}/${userID}`, {
        name:name,
        email:email,
        phone:phone,
        website:website,
        address:address,
        company:company,
        username:username,
        avatar:avatar,
        favorite:favorite
      })
      .then(window.location.reload());

  return (
    <>
      <EditOutlined onClick={showModal}>
      </EditOutlined>
      <Modal title="Edit User" open={isModalOpen} onOk={updateUser} onCancel={handleCancel}>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off">
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
                initialValue={name}
                onChange={(e)=>setName(e.target.value)}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                initialValue={email}
                onChange={(e)=>setEmail(e.target.value)}
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone"
                name="phone"
                initialValue={phone}
                onChange={(e)=>setPhone(e.target.value)}
                rules={[{ required: true, message: 'Please input your phone!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Website"
                name="website"
                initialValue={website}
                getValueFromEvent={(e)=>setWebsite(e.target.value)}
                rules={[{ required: true, message: 'Please input your website link!' }]}
            >
                <Input />
            </Form.Item>
           

        </Form>
      </Modal>
    </>
  );
};

export default Dialog;