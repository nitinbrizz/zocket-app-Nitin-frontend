import React,{useState} from 'react'
import {LocalizationProvider, DatePicker} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {Stack,Paper,TextField,Box,Typography, Button,Grid,Divider,ButtonGroup} from '@mui/material'
import { Container } from '@mui/system'
import BasicDatePicker from './BasicDatePicker'
import Slider from '@mui/material/Slider';


const styling = {
    round:{
        textAlign:"center",
        borderRadius:"50%",
        width:"20px",
        height:"20px",
        backgroundColor:"#0f6eff",
        color:"white",
        marginRight:"5px"
    },
    underHeadings:{
        textDecoration: 'underline',
        fontWeight: 'bold',
    }
}
function Step3({campaignData,setCampaignData}) {
    console.log(campaignData);
    const [rangeValue, setRangeValue] = useState(100);
    const [rangeValue2, setRangeValue2] = useState(5);

    const handleChange = (event, newValue) => {
        setCampaignData({...campaignData,budget:newValue})
        setRangeValue(newValue);
    };
    const handleChange2 = (event, newValue) => {
        setCampaignData({...campaignData,radius:newValue})
        setRangeValue2(newValue);
    };
    return (
            <Box sx={{display:"flex",alignItems:"flex-end",justifyContent:"space-between"}}>
                <Paper elevation={3} sx={{width:"100%",padding:"25px"}}>
                    <Typography variant="h6">Campaign Settings <span style={{color:"grey",fontSize:"medium"}}>(Step 3 of 4)</span></Typography>
                    <Divider/>
                    <Box sx={{display:"flex",alignItems:"center",marginTop:"15px"}}>
                        <Box sx={styling.round}>1</Box>
                        <Typography variant="subtitle1" sx={styling.underHeadings}>Budget and dates info</Typography>
                    </Box>
                    <Stack spacing={3} sx={{height:"auto",borderLeft:"2px solid grey",paddingLeft:"20px",marginLeft:"10px"}}>
                        <Box>
                                <Typography variant="subtitle1">Budget Timeline</Typography>
                                <ButtonGroup>
                                    <Button>Yearly</Button>
                                    <Button>Daily</Button>
                                </ButtonGroup>
                        </Box>
                        <Box>
                                <Stack direction="row" spacing={2}>
                                <BasicDatePicker campaignData={campaignData} setCampaignData={setCampaignData} label="start date"/>
                                <BasicDatePicker campaignData={campaignData} setCampaignData={setCampaignData} label="end date"/>
                                </Stack>
                        </Box>
                        <Box>
                                <Typography variant="body2">Enter Campaign Budget</Typography>
                                <Box sx={{width:"100%"}}>
                                    <Slider
                                        value={rangeValue}
                                        onChange={handleChange}
                                        min={100}
                                        max={100000}
                                        step={100}
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                    />
                                    <Box sx={{width:"100%",display:"flex",justifyContent:"space-between"}}>
                                        <Typography>100</Typography>
                                        <Typography>1000000</Typography>
                                    </Box>
                                </Box>
                        </Box>
                    </Stack>
                    

                    <Box>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <Box sx={styling.round}>2</Box>
                        <Typography variant="subtitle1" sx={styling.underHeadings}>Location Info</Typography>
                    </Box>
                    <Stack spacing={3} sx={{height:"100%",paddingLeft:"25px"}}>
                        <Box>
                                <Typography variant="subtitle1">Location type</Typography>
                                <ButtonGroup>
                                    <Button>Location</Button>
                                    <Button>Radius</Button>
                                </ButtonGroup>
                        </Box>
                        <Box>
                                <Typography>Select Location</Typography>
                                <TextField onChange={
                                    e => setCampaignData({...campaignData,location:e.target.value})
                                } size="small" sx={{width:"70%"}} placeholder='enter place name,location or coordinates'></TextField>
                                <Typography variant="body2">select target radius</Typography>
                                <Box sx={{width:"70%"}}>
                                    <Slider
                                        value={rangeValue2}
                                        onChange={handleChange2}
                                        min={1}
                                        max={30}
                                        step={2}
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                    />
                                    <Box sx={{width:"100%",display:"flex",justifyContent:"space-between"}}>
                                        <Typography>1 KM</Typography>
                                        <Typography>30 KM</Typography>
                                    </Box>
                                </Box>
                        </Box>
                    </Stack>
                    
                    </Box>
                    {/* <Button variant="contained" sx={{height:"30px",width:"200px"}}>Continue</Button> */}
                </Paper>
            </Box>
)
}

export default Step3

