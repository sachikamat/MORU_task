import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {  Form, Input, Modal } from 'antd';
import {  EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { URL } from './config';

const Dialog = ({prevUser}) => {
    const [userID,setUserID]=useState(prevUser.id)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setUserID(prevUser.id)
    setIsModalOpen(false);
    window.location.reload()
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
    (
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
        .then(window.location.reload())
        )

  return (
    <>
      <EditOutlined onClick={showModal}>
      </EditOutlined>
      <Modal title="Edit User" open={isModalOpen} onOk={updateUser} onCancel={()=>handleCancel()}>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        type='submit'
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off">
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' },
                {
                    pattern: new RegExp("/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i"),
                    message: "field does not accept numbers"
                   }
            ]}
                initialValue={name}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onChange={(e)=>setName(e.target.value)}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                initialValue={email}
                onChange={(e)=>setEmail(e.target.value)}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                rules={[{ required: true, type:"email",message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone"
                name="phone"
                initialValue={phone}
                onChange={(e)=>setPhone(e.target.value)}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                rules={[{ required: true,  message: 'Please input your phone!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Website"
                name="website"
                initialValue={website}
                onChange={(e)=>setWebsite(e.target.value)}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                rules={[{ required: true, message: 'Please input valid website link!' }]}
            >
                <Input />
            </Form.Item>
           

        </Form>
      </Modal>
    </>
  );
};

export default Dialog;