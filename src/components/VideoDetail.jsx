import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  if (!videoDetail?.snippet) return <div>Loading...</div>;

  return (
    <Box minHeight="95vh" p={2}>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
      <Typography variant="h5" fontWeight="bold" p={2} color="#FFF">
        {videoDetail.snippet.title}
      </Typography>
      <Typography variant="subtitle1" px={2} color="gray">
        {videoDetail.snippet.channelTitle}
      </Typography>
    </Box>
  );
};

export default VideoDetail;
