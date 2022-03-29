import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard({nave}) {
    console.log(nave)
  return (


      
        <Grid item xs={2}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
          <Avatar>
              {nave.name[0]}
          </Avatar>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
           
          { nave.model }
        </Typography>
        <Typography variant="h5" component="div">
            
          { nave.name }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            
          { nave.manufacturer}
        </Typography>
        <Typography variant="body2">
            Cost:
          { nave.cost_in_credits}
          <br />
          Length:
          { nave.length}
          <br />
          Speed
          { nave.max_atmosphering_speed}
          <br />
          Passangers
          { nave.passangers}
          <br />
          Capacity:
          { nave.cargo_capacity}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
       
  );
}
