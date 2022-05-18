import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const CurrentFeed: React.FC = () => {
  const [testData, setTestData] = useState([
    {
      translater: "userA",
      artist: "Red hot chilli peppers",
      song: "By the way",
      wm: "Standing light.......",
      jm: "今夜のショーを見るために......",
    },
    {
      translater: "userA",
      artist: "Red hot chilli peppers",
      song: "By the way",
      wm: "Standing light.......",
      jm: "今夜のショーを見るために......",
    },
  ]);
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {testData.map((data) => (
        <Box>{data.artist}</Box>
      ))}
    </Box>
  );
};

export default CurrentFeed;
