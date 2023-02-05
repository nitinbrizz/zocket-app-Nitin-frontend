import React,{useState} from 'react'
import {TextField,Paper,Box,Typography, Button,Grid,Card,CardActionArea,CardContent} from '@mui/material'
import { Container } from '@mui/system'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {IconButton} from "@mui/material";
import {InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TableView from './TableView';

export default function Dashboard({record,deleteRecord}) {
  console.log(record);
  const [selectedPlatform, setSelectedPlatform] = useState(null);


  //*****************  for handling filtering based on platfom   *******************//

  const handleFilterChange = (event) => {
    setSelectedPlatform(event.target.value);
  };

  const filteredData = record.filter(
    (item) => !selectedPlatform || item.platform === selectedPlatform
  );
  //*****************  END   *******************//

  return (
    <Box  sx={{marginLeft:"12%",display:"flex",flexDirection:"column", width:"80%",height:"100vh"}}>
        <Box sx={{margin:"3% 0 3% 0",display:"flex",width:"100%",justifyContent:"space-between",height:"10%"}} className="heading And new Campaign">
                <Box className="heading">
                  <Typography varinat="h1" sx={{fontWeight:"Bold",fontSize:"30px"}}>Your Campaigns</Typography>
                  <Typography varinat="body1" sx={{color:"grey"}}>Check the list of campaigns you created</Typography>
                </Box>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <Button href="/create" startIcon={<AddCircleOutlineIcon/>} variant="contained">Create new campaign</Button>
                </Box>
        </Box>
        <Paper className="Main Section">
                      <Box className="search and filter" sx={{margin:"1%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <TextField size="small"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment>
                                  <IconButton>
                                    <SearchIcon />
                                  </IconButton>
                                </InputAdornment>
                              )
                            }}
                            placeholder='search for campaign'/>
                          <Box className="filters" sx={{display:"flex",width:"40%",justifyContent:"space-between"}}>
                            <Box className="platform" sx={{display:"flex",justifyContent:"space-between",width:"33.3%"}}>
                                  <Typography sx={{color:"grey"}}>Platform:</Typography>
                                  <div>
                                    <select sx={{borderRadius:"10%",width:"50%"}} value={selectedPlatform} onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        <option value="google">Google</option>
                                        <option value="FB">FB</option>
                                        <option value="youtube">Youtube</option>
                                        <option value="instagram">Instagram</option>
                                    </select>

                                  </div>
                            </Box>
                            <Box className="status" sx={{display:"flex",width:"33.3%"}}>
                                  <Typography sx={{color:'grey'}}>Status:</Typography>
                                  <select >
                                      <option value="">All Status</option>
                                      <option value="live">Live Now</option>
                                      <option value="pause">paused</option>
                                      <option value="exhausted">exhausted</option>
                                  </select>
                            </Box>
                            <Box className="time period">
                              <select >
                                    <option value="30">Last 30 days</option>
                                    <option value="60">Last 60 days</option>
                                    <option value="90">Last 90 days</option>
                              </select>
                            </Box>
                          </Box>
                      </Box>
                      <Box className="col names">
                        <TableView record={filteredData} deleteRecord={deleteRecord}/>
                      </Box>
                      <Box className="content">
                        
                      </Box>
                </Paper>
    </Box>
  )
}
