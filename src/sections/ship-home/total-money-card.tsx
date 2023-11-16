import React from 'react';

import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TotalMoneyCard() {
  return (
    <>
      <Card
        sx={{ p: 3, width: 1, height: '12.375rem' }}
        style={{
          background: 'linear-gradient(180deg, #F44554 0%, #E10A1D 100%)',
        }}
      >
        <Stack sx={{ mb: 2, pt: 1, pl: { xs: 5, sm: 0, md: 5 } }}>
          <Typography
            fontSize="1.25rem"
            fontWeight={700}
            textAlign={{ sm: 'center', md: 'left' }}
            color="common.white"
          >
            คุณมียอดขายวันนี้
          </Typography>
          <Typography
            fontSize="2rem"
            fontWeight={700}
            textAlign={{ sm: 'center', md: 'left' }}
            color="common.white"
          >
            4,220 บาท
          </Typography>
        </Stack>
        <Box sx={{ ml: { xs: 5, sm: 0, md: 5 } }} textAlign={{ sm: 'center', md: 'left' }}>
          <Button
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              ':hover': {
                bgcolor: '#e6e3e3',
              },
              px: '1rem',
              py: '0.375rem',
            }}
          >
            <Typography fontSize="1rem" fontWeight={600}>
              สร้างรายการพัสดุ
            </Typography>
          </Button>
        </Box>
      </Card>
      <img
        src="/assets/images/home/girl_notebook.png"
        alt="girl with laptop"
        width="140rem"
        style={{ position: 'absolute', top: 0, right: 5, zIndex: 10 }}
      />

      <img
        src="/assets/images/home/money.png"
        alt="money"
        width="56rem"
        style={{ position: 'absolute', top: 5, left: 1, zIndex: 10 }}
      />
    </>
  );
}
