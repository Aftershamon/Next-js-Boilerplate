import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  item: {
    id: number;
    imageUrl: string;
    altText: string;
    title: string;
    srcUrl: string;
  };
}

const CardItem: React.FC<Props> = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 400,
        minHeight: 'auto',
        marginTop: '20px',
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 250 }}
        image={item.imageUrl}
        alt={item.altText}
        src={item.srcUrl}
      />
      <CardContent>
        <Typography gutterBottom component="div" fontSize={14}>
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
