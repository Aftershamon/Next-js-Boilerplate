'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaCommentDots, FaUserAlt } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPantipPickItems } from '@/redux/store/pantipPickSlice';
import type { AppDispatch, RootState } from '@/redux/store/store';

const PantipPickCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pantipPicks, loading, error } = useSelector(
    (state: RootState) => state.pick,
  );

  useEffect(() => {
    dispatch(fetchPantipPickItems());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {pantipPicks.map((item) => (
        <Link
          key={item.title}
          href={`https://pantip.com/topic/${item.topic_id}`}
          passHref
        >
          <Card
            className="card"
            sx={{
              maxWidth: 350,
              maxHeight: 420,
              minHeight: 420,
              marginTop: '20px',
              borderRadius: 2,
              transition: 'filter 0.3s ease',
              backgroundColor: '#353156',
              color: '#D6DCE9',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 250 }}
              image={
                item.thumbnail_url ||
                'https://yt3.googleusercontent.com/yC2-Yjh7kOEvx-x16u-cDv0yroGC3FQVXcZjHpu-9rTpmANquV2YRlqkrPjIqmHxKCd7U3GS9cQ=s900-c-k-c0x00ffffff-no-rj'
              }
              alt={item.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom component="div" fontSize={14}>
                {item.title}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
                marginTop: 'auto',
                backgroundColor: '#1f1d33',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography
                  style={{
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 0,
                    gap: 5,
                  }}
                >
                  <GrFormView style={{ fontSize: '20px' }} /> {item.views_count}
                </Typography>
                <Typography
                  style={{
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 0,
                    gap: 5,
                  }}
                >
                  <FaCommentDots style={{ fontSize: '16px' }} />{' '}
                  {item.comments_count}
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 0,
                }}
              >
                <Typography
                  style={{
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 0,
                    gap: 10,
                    marginLeft: '4px',
                  }}
                >
                  <FaUserAlt style={{ fontSize: '12px' }} /> {item.author.name}
                </Typography>
              </div>
            </CardActions>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export { PantipPickCard };
