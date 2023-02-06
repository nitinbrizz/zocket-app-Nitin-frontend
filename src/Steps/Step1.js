import React,{useEffect, useState} from 'react'
import {Paper,Box,Typography, Button,Grid,Card,CardActionArea,CardContent} from '@mui/material'
import { Container } from '@mui/system'
import {ChatOutlinedIcon,PhoneCallbackIcon,PeopleOutlineIcon,VisibilityOutlinedIcon,
        StorefrontOutlinedIcon, InstallMobileOutlinedIcon,PersonAddAltOutlinedIcon,
        ContentPasteIcon ,TrafficOutlinedIcon} from '@mui/icons-material';
import Icon from '@mui/material/Icon';

const cards = [
    {id:"0",icon:"phone_callback", heading1:"Get leads as calls", heading2:"Reach more audience and get leads through calls",platform:"google"} ,
    {id:"1",icon:"chat", heading1:"Get leads as Facebook Messages", heading2:"Get more FB messages from leads",platform:"FB"} ,
    {id:"2",icon:"person_add", heading1:"Increase page followers", heading2:"Encourage curstomers to follow your page",platform:"FB"} ,
    {id:"3",icon:"group_add", heading1:"Get Customer leads", heading2:"Encourage customers to take actions",platform:"FB"} ,
    {id:"4",icon:"visibility", heading1:"Get more youtube views", heading2:"Increase organic views by obtainig user attention",platform:"youtube"} ,
    {id:"5",icon:"traffic", heading1:"Get more website traffic", heading2:"Get the right people to visit your website",platform:"instagram"} ,
    {id:"6",icon:"local_convenience_store", heading1:"Increase Live store traffic", heading2:"Drive visits to local stores,restraunts & Dealerships",platform:"google"} ,
    {id:"7",icon:"install_mobile", heading1:"Increase your App installs", heading2:"Get more installs",platform:"youtube"} ,
    {id:"8",icon:"assignment ", heading1:"Increase the catalogue sales", heading2:"Drive the sales of your catalogue and get more leads",platform:"google"} ,
]
const styling = {
    container:{
        paddingRight: 2,
        paddingBottom: 2,
        paddingLeft:2
    },
    button:{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
        height:"100%",
        border:"1px solid grey",
        color:"black",
        textAlign:"left",
        borderRadius:"10px",
        textTransform:"none",
        position:"relative",
        "&:focus":{
            border:"2px solid #0f6eff",
        } 
    },
}
export default function Step1({campaignData,setCampaignData}) {
    const [clicks, setclicks] = useState([])
    const [name, setname] = useState("")
    const [platform, setplatform] = useState("")
    
    useEffect(() => {
        console.log(campaignData.name);
        console.log(campaignData.platform);
      }, [campaignData]);

    //   useEffect(() => {
    //     setCampaignData({...campaignData,platform:platform})
    //     console.log(campaignData.platform);
    //   }, [platform]);

    return (
        <Box sx={{borderRadius:"10px",padding:"20px",backgroundColor:"white"}}>
            <Typography variant="h6" m={2} gutterBottom>What do you want to do? (Step1 of 4)</Typography>
            <Grid sx={styling.container} container spacing={2}>
                {cards.map((card)=>(
                    <Grid key={card.id} item xs={6} md={4}>
                        <Button sx={styling.button} onClick={()=>{
                                setclicks([card.id])
                                setCampaignData({...campaignData,name:card.heading1,platform:card.platform})}}>
                                {clicks.includes(card.id) ? 
                                <Box>
                                    <Icon sx={{position:"absolute",left:"95%",top:"-10px",color:"blue",backgroundColor:"white"}}>check_circle</Icon>
                                    <Icon fontSize='medium' sx={{color:"blue",marginRight:"20px"}}>{card.icon}</Icon>
                                </Box> : 
                                <Box>
                                    <Icon fontSize='medium' sx={{color:"#b6b6b6",marginRight:"20px"}}>{card.icon}</Icon>
                                </Box> }
                                    <Box>
                                        <Typography variant="h6" sx={{fontSize:"15px"}}>{card.heading1}</Typography>
                                        <Typography variant="body2" sx={{color:"#b6b6b6"}}>{card.heading2}</Typography>
                                    </Box>
                        </Button>
                    </Grid>
                ))
                }

            </Grid>
            {/* <Box sx={styling.container} display="flex" justifyContent="flex-end" mt={2}>
                    <Button variant="contained" sx={{width:"200px"}}>Continue</Button>
            </Box> */}
        </Box>
    )
}
