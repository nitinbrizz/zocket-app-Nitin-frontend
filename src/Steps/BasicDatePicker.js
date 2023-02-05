import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Box,Typography} from '@mui/material'

export default function BasicDatePicker({label,campaignData,setCampaignData}) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{}}>
      <Box sx={{display:"flex", flexDirection:"column"}}>
        <Typography>{label}</Typography>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            if(label=="start date"){
                    setCampaignData({...campaignData,startDate:`${newValue.$D}/${newValue.$M+1}/${newValue.$y}`})
              // console.log(`start date is: ${newValue.$D}/${newValue.$M+1}/${newValue.$y}`);
            }else 
                    setCampaignData({...campaignData,endDate:`${newValue.$D}/${newValue.$M+1}/${newValue.$y}`})   
            // console.log(`end date is: ${newValue.$D}/${newValue.$M+1}/${newValue.$y}`);
          }}
          renderInput={(params) => <TextField size="small" {...params} />}
        />
      </Box>
      
    </LocalizationProvider>
  );
}