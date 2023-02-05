import React,{useState,useEffect} from 'react'
import {Paper,Box,Typography, Button,Grid,Card,CardActionArea,CardContent, Avatar} from '@mui/material'
import { Container } from '@mui/system'
import {ChatOutlinedIcon,PhoneCallbackIcon,PeopleOutlineIcon,VisibilityOutlinedIcon,
        StorefrontOutlinedIcon, InstallMobileOutlinedIcon,PersonAddAltOutlinedIcon,
        ContentPasteIcon ,TrafficOutlinedIcon} from '@mui/icons-material';
import Icon from '@mui/material/Icon';

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
        paddingLeft:"20px",
        "&:focus":{
            border:"2px solid #0f6eff",
        } 
    },
}
export default function Step1({products,campaignData,setCampaignData}) {
    console.log(campaignData)
    const [clicks, setclicks] = useState([])

    useEffect(() => {
        console.log(campaignData.productName);
        console.log(campaignData.url);
      }, [campaignData]);
    
    //   const handleClick = (prod) => {
    //     setCampaignData({...campaignData,productName:prod.name})
    //     setCampaignData({...campaignData,url:prod.url})
    //   }; 
    return (
        <Paper sx={{borderRadius:"10px",padding:"20px"}}>
            <Typography variant="h6" m={2} gutterBottom>What do you want to do? (Step1 of 4)</Typography>
            <Grid  sx={styling.container} container spacing={2}>
                {products.map((prod)=>(
                    <Grid key={prod._id} item xs={6} md={4}>
                        <Button sx={styling.button} onClick={()=>{
                                                    setclicks([prod._id])
                                                    setCampaignData({...campaignData,productName:prod.name,url:prod.url})
                                                    }}>
                                {clicks.includes(prod._id) ? <Icon sx={{position:"absolute",left:"95%",top:"-10px",color:"blue",backgroundColor:"white"}}>check_circle</Icon>
                                 : <></>}
                                <img style={{width:"20%",height:"100%",position:"relative",left:"-5%"}} src={prod.url} alt="My Image" />
                                <Box>
                                    <Typography variant="h6" sx={{fontSize:"15px"}}>{prod.name}</Typography>
                                    {/* <Typography variant="body2" sx={{color:"#b6b6b6"}}>{prod.price}</Typography> */}
                                </Box>
                        </Button>
                    </Grid>
                ))
                }

            </Grid>
            {/* <Box sx={styling.container} display="flex" justifyContent="flex-end" mt={2}>
                    <Button variant="contained" sx={{width:"200px"}}>Continue</Button>
            </Box> */}
            {/* </Container> */}
        </Paper>
    )
}
