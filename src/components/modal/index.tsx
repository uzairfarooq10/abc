import { Review } from '@/constant/types';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Modal = ({ reviews = [] }: { reviews?: Review[] }) => {
  {
    console.log(reviews.length);
    console.log(reviews[0].comment);
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#111',
        // opacity: 0.8,
      }}
    >
      <Box sx={{ backgroundColor: '#fff', padding: '100rem', color: '#000' }}>
        <Typography>{reviews?.length}</Typography>
      </Box>
    </Box>
  );
};

export default Modal;
