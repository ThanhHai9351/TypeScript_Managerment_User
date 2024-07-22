import { Box, Typography } from '@mui/material';
import React from 'react';
import { useUsers } from '../../apis/get-users';
import { TableUsers } from '../../components/custom/TableUsers/TableUsers';
const ProductPage: React.FC = () => {
  const { isLoading, isError, error, data } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <Box p={2}>
         <Typography mb={2} sx={{fontWeight:"bold"}} variant='h5'>Danh mục người dùng:</Typography>
         {data ? <TableUsers data={data} /> : <Box>Loading ... </Box>} 
      </Box>
  );
}

export default ProductPage;