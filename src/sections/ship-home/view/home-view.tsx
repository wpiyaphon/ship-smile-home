'use client';

import React from 'react';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';

import StatisticCard from '../statistic-card';
import MovieListCard from '../movie-list-card';
import TotalMoneyCard from '../total-money-card';
import BranchListCard from '../branch-list-card';

export default function HomeView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Grid container direction="row" spacing={3} sx={{ my: 1.5 }}>
        <Grid xs={12} sm={12} md={4} sx={{ position: 'relative' }}>
          <TotalMoneyCard />
        </Grid>
        <Grid xs={12} sm={12} md={8}>
          <StatisticCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={8}>
          <MovieListCard />
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <Stack direction="column" spacing={2}>
            <BranchListCard title="จำนวนสาขาทั้งหมด" branchAmount={3} type="All" />
            <BranchListCard title="จำนวนสาขาที่เปิดให้บริการ" branchAmount={2} type="Available" />
            <BranchListCard
              title="จำนวนสาขาที่ไม่เปิดให้บริการในวันนี้"
              branchAmount={1}
              type="Unavailable"
            />
            <BranchListCard
              title="จำนวนสาขาที่ไม่เปิดให้บริการเกิน 1 วัน"
              branchAmount={0}
              type="UnavailableLessThanOne"
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
