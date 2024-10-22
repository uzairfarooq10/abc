// import { getData } from '@/pages/api';
import StyledTable from '@/components/table';
import { Box, Typography } from '@mui/material';
// import { Product } from '@/constant/types';
import React from 'react';

const Products = async () => {
  const getData = async () => {
    const response = await fetch(`${process.env.BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  };

  const productData = await getData();

  return (
    <Box height='91vh'>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        padding={3}
        sx={{
          maxHeight: '91vh',
          marginTop: `calc(100vh - 91vh)`,
        }}
      >
        <Typography
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            padding: '8px',
            paddingX: '1rem',
            fontSize: '20px',
          }}
        >
          Products
        </Typography>
        <StyledTable products={productData} />
      </Box>
    </Box>
  );
};

export default Products;
