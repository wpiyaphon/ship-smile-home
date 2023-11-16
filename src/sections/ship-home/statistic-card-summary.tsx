import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { CardProps } from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { ColorSchema } from 'src/theme/palette';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: number;
  icon: React.ReactNode;
  color?: ColorSchema;
}

export default function StatisticCardSummary({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}: Props) {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems="center"
      spacing={2}
      sx={{ py: { xs: 2 } }}
    >
      {icon && icon}

      <Box>
        <Typography
          textAlign={{ xs: 'center', md: 'left' }}
          fontSize="0.9375rem"
          fontWeight={700}
          sx={{ opacity: 0.64 }}
        >
          {title}
        </Typography>
        <Typography
          fontSize="1.5rem"
          fontWeight={700}
          color="primary.main"
          textAlign={{ xs: 'center', md: 'left' }}
        >
          {`${total} ชิ้น`}
        </Typography>
      </Box>
    </Stack>
  );
}
