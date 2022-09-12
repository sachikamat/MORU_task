import 'antd/dist/antd.min.css';
import {Card} from 'antd'
import { DeleteFilled, GlobalOutlined, HeartOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { imgURL,URL } from './config';
import './App.css'
import Dialog from './Dialog';
import UserCard from './cards';
const { Meta } = Card;



const Users = () => {
    const [users,setUsers]=useState([])
    // const avatars=[
    //     'av1.png',
    //     'av2.png',
    //     'av3.jpeg',
    //     'av4.webp',
    //     'av5.png',
    //     'av6.png',
    //     'av7.png',
    //     'av8.png',
    //     'av9.png',
    //     'av10.png'

    // ]
    // const URL='https://jsonplaceholder.typicode.com/users'
    
    useEffect(() => {
        axios
        .get(URL)
        .then(res => {
            setUsers(res.data);
        })
    },[]);
    console.log(users)
    
  return (
    <div className='main'>
    {
        <ul className='userList'>
            {
                users.map((user)=>(
                    <li><UserCard user={user} id={user.id} name={user.name} email={user.email} phone={user.phone} website={user.website} avatar={user.avatar} /> </li>
                ))
            }
        </ul>
    }
     
    </div>
  )
}

export default Users
