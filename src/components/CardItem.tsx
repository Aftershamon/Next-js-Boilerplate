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
    <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {highlights.map((item) => (
        <Link key={item.name} href={item.post_url} passHref>
          <Card
            sx={{
              maxWidth: 350,
              maxHeight: 350,
              minHeight: 350,
              marginTop: '20px',
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 250 }}
              image={item.image_url[0]}
              alt={item.name}
            />
            <CardContent>
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
