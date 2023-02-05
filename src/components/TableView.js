import React from 'react'
import {Table,Box,Paper,Switch,Checkbox,Button,ButtonGroup, Typography} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

function TableView({record,deleteRecord}) {
    return (
        <div className="App">
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Checkbox/></TableCell>
            <TableCell>on/off</TableCell>
            <TableCell>Campaign</TableCell>
            <TableCell >Date Range</TableCell>
            <TableCell >Budget</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >Platform</TableCell>
            <TableCell >status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell><Checkbox/></TableCell>
              <TableCell><Switch/></TableCell>
              <TableCell component="th" scope="row">
                <Box sx={{display:"flex",alignItems:"center", width:"100%"}}>
                  <Box >
                    <img style={{width:"50px"}} src={row.url}/>
                  </Box>
                  <Box sx={{marginLeft:"10px",}}>
                    <Typography sx={{fontSize:"15px",fontWeight:"bold"}}>{row.productName} Campaign</Typography>
                    <Typography variant="body2">Created on {row.createdAt.substring(0,10)}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell >{row.startDate}-{row.endDate}</TableCell>
              <TableCell >{row.budget}</TableCell>
              <TableCell >{row.location}</TableCell>
              <TableCell >
                  {
                  row.platform == "google" ? <GoogleIcon/> : row.platform == "FB" ? <FacebookIcon sx={{color:"blue"}}/> :
                  row.platform == "youtube" ? <YouTubeIcon sx={{color:"red"}}/> : <InstagramIcon/>
                  }  
              </TableCell>
              <TableCell ><Box sx={{backgroundColor:"lightgreen",color:"green",borderRadius:"10px",textAlign:"center"}}>{row.status}</Box></TableCell>
              <TableCell align="right">
                  <ButtonGroup>
                    <Button onClick={()=>console.log("edit clicked")}><EditIcon color="primary"/></Button>
                    <Button onClick={()=>{deleteRecord(row._id)}}><DeleteIcon color="error"/></Button>
                  </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    )
}

export default TableView