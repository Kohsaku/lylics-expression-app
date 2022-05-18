import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

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
      <Typography variant="h5">最近のフィード</Typography>
      <Grid
        container
        flexDirection="column"
        sx={{ mt: 3, alignItems: "center" }}
      >
        {testData.map((data) => (
          <Grid item>
            <Box p={4} sx={{ border: "1px solid grey" }}>
              <Typography variant="h6">{data.song}</Typography>
              <Typography variant="h6">{data.artist}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CurrentFeed;
