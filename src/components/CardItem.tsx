'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchHighlights } from '@/redux/store/highlightSlice';
import type { AppDispatch, RootState } from '@/redux/store/store';

const CardItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { highlights, loading, error } = useSelector(
    (state: RootState) => state.highlight,
  );

  useEffect(() => {
    dispatch(fetchHighlights());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {highlights.map((item) => (
        <Link key={item.name} href={item.post_url} passHref>
          <Card
            className="card"
            sx={{
              maxWidth: '100%',
              height: 350,
              mt: 2,
              borderRadius: 2,
              transition: 'filter 0.3s ease',
              backgroundColor: '#353156',
              color: '#D6DCE9',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 250 }}
              image={
                item.image_url[0] ||
                'https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png'
              }
              alt={item.name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom component="div" fontSize={14}>
                {item.name}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export { CardItem };
