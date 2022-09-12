import 'antd/dist/antd.min.css';
import {Card} from 'antd'
import { DeleteFilled, GlobalOutlined, HeartFilled, HeartOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { imgURL,URL } from './config';
import './App.css'
import Dialog from './Dialog';
const { Meta } = Card;



const UserCard = ({avatar,id,user,name,email,phone,website}) => {
    // const [users,setUsers]=useState([])
    const [favorite,setFavorite]=useState(user.favorite)
    
    const handleFavorite = (user)=>{
        axios.put(`${URL}/${id}`,{
            name:user.name,
            email:user.email,
            phone:user.phone,
            website:user.website,
            address:user.address,
            company:user.company,
            username:user.username,
            avatar:user.avatar,
            favorite:!user.favorite
        })
        .then(setFavorite(!favorite))
    }
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
    const handleDelete = (id)=>{
        axios
        .delete(`${URL}/${id}`)
        .then(window.location.reload())
    }
   
    // console.log(users)
    
  return (
    <div className='main'>
    {
            <Card className='card'
            style={{
            width: 250,
            }}
                cover={
                <img
                    alt="example"
                    src={imgURL+avatar}
                />
                }
                actions={[
                (!favorite) ? (
                    <HeartOutlined style={{color:'red'}} key="favorite" onClick={()=>handleFavorite(user)} />
                    ) : (
                    <HeartFilled style={{color:'red'}} key="favorite" onClick={()=>handleFavorite(user)} />
                    ),
                // <HeartOutlined style={{color:'red'}} key="favorite" onClick={()=>handleFavorite(user)} />,
                <Dialog prevUser={user}  />,
                <DeleteFilled key='delete' onClick={()=>handleDelete(id)} />
                ]}
            >
                <Meta
                
                title={name}
                description={
                    <ul className='userDescription'>
                        <li><MailOutlined/>  {email}  </li>
                        <li><PhoneOutlined/>  {phone} </li>
                        <li><GlobalOutlined/>  {website} </li>
                    </ul>
                }
                />
            </Card>

    }
     
    </div>
  )
}

export default UserCard
