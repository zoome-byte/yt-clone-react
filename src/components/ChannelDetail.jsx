import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ChannelDetail = () => {
  const { id } = useParams();

  return (
    <Box minHeight="95vh">
      <Typography variant="h4" color="white" p={2}>
        Channel Detail - {id}
      </Typography>
      {/* Add channel details here */}
    </Box>
  );
};

export default ChannelDetail;
