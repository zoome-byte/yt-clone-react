import React from 'react';
import { Stack, Button } from '@mui/material';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['New', 'Music', 'Gaming', 'News', 'Movies'];

  return (
    <Stack direction="row" sx={{ overflowX: 'auto' }}>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setSelectedCategory(category)}
          sx={{
            color: '#fff',
            backgroundColor: category === selectedCategory ? '#FC1503' : 'transparent',
            marginRight: 1
          }}
        >
          {category}
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
