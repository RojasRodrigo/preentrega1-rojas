import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({ char }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={char.image}
          alt="picture-products"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {char.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {char.title} {char.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardUser;