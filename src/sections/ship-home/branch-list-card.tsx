import React from 'react';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  branchAmount: number;
  type: string;
};

export default function BranchListCard({ title, branchAmount, type }: Props) {
  const shopType: string[] = ['All', 'Available', 'Unavailable', 'UnavailableLessThanOne'];

  const imageIcons: string[] = [
    'ic_shop_all.svg',
    'ic_shop_available.svg',
    'ic_shop_unavailable.svg',
    'ic_shop_unavailable1.svg',
  ];

  return (
    <Card sx={{ p: 4, width: 1 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="column">
          <Typography fontSize="0.9375rem" fontWeight={700} color="#637381">
            {title}
          </Typography>
          <Typography fontSize="1.5rem" fontWeight={700}>
            {branchAmount > 0 ? `${branchAmount} สาขา` : `ไม่มี`}
          </Typography>
        </Stack>
        <Box
          component="img"
          alt="shop"
          src={`/assets/icons/home/${imageIcons[shopType.indexOf(type)]}`}
          sx={{ width: 48, height: 48 }}
        />
      </Stack>
    </Card>
  );
}
