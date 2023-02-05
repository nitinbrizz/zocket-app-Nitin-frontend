import React from 'react'
import {Box} from '@mui/material'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ProgressBar({page}) {

    const styling = {
        progressIcons:{
          width:"45px",
          height:"45px",
          borderRadius:"100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        },
      }

  return (
    <Box mb={5} sx={{width:"100%",position:"relative"}}>
        <div className="progressbar" style={{postion:"absolute",top:"10%",width:"100%",height:"5px",backgroundColor:"white",borderRadius:"10p%"}}>
        <div
            style={{backgroundColor:"#f29a2e",height:"100%", width: page === 0 ? "25%" : page == 1 ? "50%" : page==2 ? "75%" : "100%" ,}}
        ></div>
        </div>
        <Box sx={{position:"absolute",top:"-20px",left:"0px",width:"100%",display:"flex",justifyContent:"space-between"}}>
        <Box sx={styling.progressIcons} style={{color: page>=0 ? "white" : "grey",backgroundColor: page>=0 ?"orange": "#c6ccd3"}}><EmojiObjectsIcon/></Box>
        <Box sx={styling.progressIcons} style={{color: page>=1 ? "white" : "grey",backgroundColor: page>=1 ?"orange": "#c6ccd3"}}><ShoppingBasketIcon/></Box>
        <Box sx={styling.progressIcons} style={{color: page>=2 ? "white" : "grey",backgroundColor: page>=2 ?"orange": "#c6ccd3"}}><DateRangeIcon/></Box>
        <Box sx={styling.progressIcons} style={{color: page>=3 ? "white" : "grey",backgroundColor: page>=3 ?"orange": "#c6ccd3"}}><CheckCircleIcon/></Box>
        </Box>
    </Box>
  )
}
