'use client';

import React from 'react';

// @mui
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { useGetMoviesQuery } from 'src/api/movie';

import Iconify from 'src/components/iconify/iconify';
import { LoadingScreen } from 'src/components/loading-screen';

import CarouselAnimation from '../_examples/extra/carousel-view/carousel-animation';

export default function MovieListCard() {
  const { data, error, isLoading } = useGetMoviesQuery();

  if (error) {
    return null;
  }

  if (isLoading || !data || !('movies' in data)) {
    return <LoadingScreen />;
  }

  type Movie = {
    id: number;
    title_th: string;
    poster_url: string;
    synopsis_th: string;
  };

  const { movies }: { movies: Movie[] } = data as { movies: Movie[] };

  const carouselImages = movies.map((movie: any, index: number) => ({
    id: movie.id,
    title: movie.title_th,
    coverUrl: movie.poster_url,
    description: movie.synopsis_th,
  }));

  return (
    <Card sx={{ px: 3, pt: 4, pb: 3, width: 1 }}>
      <Typography variant="h6">ข่าวสาร & โปรโมชันล่าสุด</Typography>

      <CardContent sx={{ px: 2, py: 4 }}>
        <CarouselAnimation data={carouselImages} />
      </CardContent>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {movies
          .filter((movie: any, i: number) => i < 6)
          .map((movie: any, i: number) => (
            <ListItem key={i} sx={{ alignItems: 'center' }}>
              <ListItemAvatar>
                <img
                  src={movie.poster_url}
                  alt={movie.title_th}
                  style={{ borderRadius: 6 }}
                  width={42}
                  height={42}
                />
              </ListItemAvatar>
              <ListItemText
                primary={movie.title_th}
                secondary={
                  movie.synopsis_th.length > 80
                    ? `${movie.synopsis_th.substring(0, 80)}...`
                    : movie.synopsis_th
                }
              />
              <ListItemText
                primary="25 พ.ย. 2565"
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  color: '#637381',
                  textAlign: 'right',
                }}
              />
            </ListItem>
          ))}
      </List>
      <Divider />
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ mt: 3, cursor: 'pointer' }}
      >
        <Typography fontSize="0.875rem" fontWeight={700}>
          อ่านเพิ่มเติม
        </Typography>
        <Iconify icon="ic:round-chevron-right" width={24} />
      </Stack>
    </Card>
  );
}
