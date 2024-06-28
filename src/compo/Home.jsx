import React from 'react';
import Button from './Button.jsx';

export default function Home() {
  return (
    <div>
      <img src="rn.jpg"  className="w-25 " style={{borderRadius:'90px',
    position:"relative",left:"50%",top:"100px",transform:'translate(-50%,-50%)'}}  alt="Ronaldo" />
    <p className='m-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio corporis mollitia atque aliquid, similique alias nihil nesciunt perferendis incidunt laborum. Ad inventore commodi quas blanditiis repellat dicta eos dolorum?</p>
    <Button type="register"/>
    <Button type="login"/>
    <Button type="signup"/>
    
    </div>
  )
}
