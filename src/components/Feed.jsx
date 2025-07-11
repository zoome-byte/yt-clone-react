import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import VideoCard from './VideoCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" mb={2} color="white">
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {videos.map((item, idx) =>
            item.id.videoId ? <VideoCard key={idx} video={item} /> : null
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Feed;
