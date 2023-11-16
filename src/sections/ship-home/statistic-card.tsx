'use client';

import React from 'react';

import { Box, Stack } from '@mui/system';
import { Card, Divider, Typography } from '@mui/material';

import StatisticCardSummary from './statistic-card-summary';
// @mui

// ----------------------------------------------------------------------

export default function StatisticCard() {
  return (
    <Box height={1} width={1}>
      <Stack
        alignItems="center"
        direction="column"
        sx={{
          borderRadius: 2,
          textAlign: 'center',
        }}
        boxShadow="0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)"
        height={1}
      >
        <Card
          sx={{
            bgcolor: '#F6F7F8',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            width: 1,
            height: 0.5,
          }}
        >
          <Stack alignItems="center" justifyContent="center" sx={{ py: { xs: 2 } }} height={1}>
            <Typography fontSize="1.5rem" fontWeight={700}>
              สถิติการจัดส่งวันนี้
            </Typography>
          </Stack>
        </Card>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-evenly"
          width={1}
          height={1}
          py={2}
        >
          <StatisticCardSummary
            title="พัสดุรอการชำระเงิน"
            total={42}
            color="primary"
            icon={<img alt="icon" src="/assets/icons/home/ic_box.svg" width={45} />}
          />

          <Divider orientation="vertical" flexItem />

          <StatisticCardSummary
            title="พัสดุรอขนส่ง"
            total={90}
            color="primary"
            icon={<img alt="icon" src="/assets/icons/home/ic_delivery.svg" width={45} />}
          />

          <Divider orientation="vertical" flexItem />

          <StatisticCardSummary
            title="พัสดุที่ขนส่งรับไปแล้ว"
            total={100}
            color="primary"
            icon={<img alt="icon" src="/assets/icons/home/ic_tick.svg" width={45} />}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
