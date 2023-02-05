import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box,Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Step4({campaignData,setCampaignData}) {
  console.log(campaignData)
  return (
    <Paper sx={{padding:"1%",height:"70%"}}>
      <Typography variant="h6">Ready to go (Step 4 of 4)</Typography>
         <Card sx={{ maxWidth: 345,height:"80%",marginTop:"2%",marginLeft:"5%"}}>
              <CardHeader
              avatar={
                <Avatar src="/000.png" aria-label="recipe">
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Nitin Singh"
              subheader="02-Feb-2023"
            />
                  <CardMedia
                      sx={{ height: 0,
                        paddingTop: '56.25%', // 16:9,
                        marginTop:'30',
                        objectFit:"fill"
                      }}
                      image={campaignData.url}
                      title="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {campaignData.productName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Get the Best deals on Iphone and other premium smartphones.
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small">Change Image</Button>
                      <Button size="small">Edit</Button>
                  </CardActions>
          </Card>
    </Paper>
  )
}
