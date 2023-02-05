import React from 'react'
import { Avatar,Card,Typography } from '@mui/material'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function NavBar2() {
  return (
    <div style={{width:"98.8vw",height:"55px",backgroundColor:"white",display:"flex",justifyContent:"flex-end"}}>
        <div style={{width:"40%",display:"flex",alignItems:"center",marginRight:"0%"}}>
            <div style={{width:"30%"}}>
                <Typography sx={{fontSize:"small"}}>Free Trial ends in 2 days</Typography>
            </div>
            <div style={{margin:"auto",backgroundColor:"#fef5ea",borderRadius:"10px",height:"80%",width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <CreditCardIcon sx={{color:"orange"}}/>
                <Typography sx={{color:"orange"}}>
                Buy Plan
                </Typography>
            </div>
            <div style={{width:"15%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <CardGiftcardIcon/>
                <NotificationsActiveIcon/>
            </div>
            <div style={{width:"40%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <Avatar src="/000.png" sx={{ width: 50, height: 50 }}  alt="image" />
                <h4>Nitin's Zocket Project </h4>
            </div>
        </div>
    </div>
  )
}

export default NavBar2