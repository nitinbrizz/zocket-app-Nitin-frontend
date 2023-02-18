import React, { useState } from 'react'
import Step2 from '../Steps/Step2'
import Step1 from '../Steps/Step1'
import Step3 from '../Steps/Step3'
import Step4 from '../Steps/Step4'
import {Paper,Box,Container,Typography, Button,Grid,Card,CardActionArea,CardContent} from '@mui/material'
import axios from "axios"
import {toast} from "react-toastify"
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ProgressBar from './ProgressBar'
import {useNavigate} from 'react-router-dom';

export default function Create({products}) {
  
  const [items, setitems] = useState(products)
  const [campaignData, setCampaignData] = useState({
    name:"",
    productName:"",
    url:"",
    platform:"",
    status:"Live Now",
    startDate:"",
    endDate:"",
    budget:"100",
    location:"",
    radius:"1"
  })
  const [page, setPage] = useState(0);

  const FormTitles = ["What you want to do", "Choose the Product", "Campaign Settings","Ready to go"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 campaignData={campaignData} setCampaignData={setCampaignData} />;
    } else if (page === 1) {
      return <Step2 products={products} campaignData={campaignData} setCampaignData={setCampaignData} />;
    } else if(page==2){
      return <Step3 campaignData={campaignData} setCampaignData={setCampaignData} />;
    }else{
      return <Step4 campaignData={campaignData} setCampaignData={setCampaignData} />;
    }
  };

  
  const btnHandler = async (e) =>{
    if (page === FormTitles.length - 1) {
      try {
        console.log("trying...");
        await axios.post("https://zocket-app-nitin-api.onrender.com/api/tasks",campaignData).then(()=>{
          console.log("connected!!!!!");
          console.log(campaignData)
        })
      } catch (error) {
        console.log(error.response.data);
        toast.error(error.message);
      }
      alert("FORM SUBMITTED, go to dashboard to check the new entry");
    } else {
      setPage((currPage) => currPage + 1);
    }
  }
 
  
  return (
      <Box sx={{display:"flex",width:"80%",height:"100vh",margin:"auto"}}>
                <Container sx={{width:"80%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
                <Box mb={5}>
                    <Typography variant="h3">Your Ad Campaign</Typography>
                    <Typography variant="body1" sx={{color:"grey"}}>Launch your Ad in 4 easy steps</Typography>
                </Box>
                <ProgressBar page={page}/>
                {PageDisplay()}
                <Box display="flex" justifyContent="flex-end" mt={3} pb={5} sx={{width:"100%"}}>
                  <Button variant="contained" sx={{width:"200px"}}
                    onClick={btnHandler}>
                    {page === FormTitles.length - 1 ? "Submit" : "Continue"}
                    </Button>
                </Box>
                </Container>       
          </Box> 
   
  )
}
