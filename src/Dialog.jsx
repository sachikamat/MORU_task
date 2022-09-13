import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {  Button, Form, Input, Modal } from 'antd';
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

  const [user,setUser]=useState({
    name:prevUser.name,
    email:prevUser.email,
    phone:prevUser.phone,
    website:prevUser.website,
    address:prevUser.address,
    company:prevUser.company,
    username:prevUser.username,
    avatar:prevUser.avatar,
    favorite:prevUser.favorite
  })


  // const [name,setName]=useState(prevUser.name)
  // const [email,setEmail]=useState(prevUser.email)
  // const [phone,setPhone]=useState(prevUser.phone)
  // const [website,setWebsite]=useState(prevUser.website)
  // const [address,setAddress]=useState(prevUser.address) 
  // const [company,setCompany]=useState(prevUser.company)
  // const [username,setUsername]=useState(prevUser.username)
  // const [avatar,setAvatar]=useState(prevUser.avatar)
  // const [favorite,setFavorite]=useState(prevUser.favorite)

  const [form] = Form.useForm()
  const updateUser = () =>
    (
        axios
        .put(`${URL}/${userID}`, {
            name:user.name,
            email:user.email,
            phone:user.phone,
            website:user.website,
            address:user.address,
            company:user.company,
            username:user.username,
            avatar:user.avatar,
            favorite:user.favorite
        })
        .then(window.location.reload())
        )
        

  return (
    <>
      <EditOutlined onClick={showModal}>
      </EditOutlined>
      <Modal title="Edit User" open={isModalOpen} onOk={updateUser} onCancel={()=>handleCancel()}>
        <Form
        // {...layout}
        form={form}
        scrollToFirstError
        // validateMessages={validateMessages}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        type='submit'
        onFinish={(values) => {
          console.log({ values });
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
        autoComplete="off">
            <Form.Item
                label="Name"
                name="Name"
                hasFeedback
                rules={[{ required: true, message: 'Please input your name!' },
                {
                  whitespace:true
                }
            ]}
                initialValue={user.name}
                onChange={(e)=>setUser({
                  ...user,
                  name: e.target.value
                })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                initialValue={user.email}
                onChange={(e)=>setUser({
                  ...user,
                  email: e.target.value
                })}
                hasFeedback
                rules={[{ required: true, message:"Please enter your email"},{
                     type:"email",
                     message: 'Please enter valid email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone"
                name="phone"
                initialValue={user.phone}
                onChange={(e)=>setUser({
                  ...user,
                  phone: e.target.value
                })}
                rules={[{ required: true,  message: 'Please input your phone!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Website"
                name="website"
                initialValue={user.website}
                onChange={(e)=>setUser({
                  ...user,
                  website: e.target.value
                })}
                hasFeedback
                
                rules={[{ required: true, message: 'Please input a website link!' },
              {
                type:'url',
                message:'Please enter valid link'
              }
              ]}
            >
                <Input />
            </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

export default Dialog;