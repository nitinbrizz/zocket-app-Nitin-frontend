import { Button,Box,Stack,Typography } from '@mui/material'
import CampaignIcon from '@mui/icons-material/Campaign';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from 'react'

export default function NavBar() {
  return (
    <div style={{position:"fixed",backgroundColor:"#001738",height:"100vh",width:"80px",margin:"0",display:"flex",flexDirection:"column"}}>
      {/* RocketLaunchIcon */}
      <Box sx={{backgroundColor:"blue",width:"70%",height:"50px",margin:"20px auto 0 auto",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button href="/">
          <RocketLaunchIcon fontSize="large" sx={{color:'white'}}/>  
        </Button>
      </Box>
      {/* other icons */}
      <Stack spacing={2} mt={10}>
        <Button sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <HomeIcon sx={{color:"white"}}/>
              <Typography sx={{fontSize:"small" ,color:"white"}}>Home</Typography>
        </Button>
        <Button sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <CampaignIcon sx={{color:"white"}}/>
              <Typography sx={{fontSize:"small" ,color:"white"}}>Campaign</Typography>
        </Button>
        <Button sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <ShoppingBasketIcon sx={{color:"white"}}/>
              <Typography sx={{fontSize:"small" ,color:"white"}}>Products</Typography>
        </Button>
        <Button sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <PeopleIcon sx={{color:"white"}}/>
              <Typography sx={{fontSize:"small" ,color:"white"}}>Customers</Typography>
        </Button>
      </Stack>
    </div>
  )
}
