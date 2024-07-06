import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

export default function NewsCard({ news }) {
  console.log(news, 14)
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {
        news && news.length > 0 ? news.map(n => (

          <div key={n} className="flex-none rounded-lg p-4 w-72" style={{ height: "400px", overflow: "hidden" }}  >
            <Card sx={{ maxWidth: 345 }}>

              <CardMedia
                component="img"
                alt="waiting"
                height="140"
                image={n.urlToImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n.description}
                </Typography>
              </CardContent>
              <CardActions>

                <Link to={n.url}> <Button size="small">Learn More</Button></Link>
              </CardActions>
            </Card>
          </div>
        )) : <></>
      }
    </div>
  );
}