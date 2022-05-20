import React, { useState } from "react";
import { Box, Grid, Typography, Paper, ButtonBase } from "@mui/material";

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
    <Box sx={{ my: 8 }}>
      <Typography variant="h5">最近のフィード</Typography>
      <Box
        sx={{
          mx: 4,
          display: "flex",
        }}
      >
        <Grid container xs={12} sx={{ mt: 3 }}>
          <Paper sx={{ width: "100%" }}>
            {testData.map((data) => (
              <Grid item>
                <ButtonBase sx={{ width: "100%" }}>
                  <Box
                    p={4}
                    sx={{
                      border: "1px solid gray",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    <Typography variant="h6">曲名：{data.song}</Typography>
                    <Typography variant="h6">
                      アーティスト：{data.artist}
                    </Typography>
                    <Typography variant="subtitle2">
                      翻訳：{data.translater}
                    </Typography>
                    <Typography variant="subtitle2">英詞：{data.wm}</Typography>
                    <Typography variant="subtitle2">和訳：{data.jm}</Typography>
                  </Box>
                </ButtonBase>
              </Grid>
            ))}
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
};

export default CurrentFeed;
