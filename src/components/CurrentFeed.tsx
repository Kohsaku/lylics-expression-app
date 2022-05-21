import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  ButtonBase,
  List,
  ListItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CurrentFeed: React.FC = () => {
  const [testData, setTestData] = useState([
    {
      translater: "userA",
      artist: "Red hot chilli peppers",
      song: "By the way",
      wm: "Standing light.......",
      jm: "今夜のショーを見るために......",
      liked: 21,
    },
    {
      translater: "userA",
      artist: "Red hot chilli peppers",
      song: "By the way",
      wm: "Standing light.......",
      jm: "今夜のショーを見るために......",
      liked: 10,
    },
    {
      translater: "userA",
      artist: "Red hot chilli peppers",
      song: "By the way",
      wm: "Standing light.......",
      jm: "今夜のショーを見るために......",
      liked: 10,
    },
  ]);
  return (
    <Box sx={{ my: 6 }}>
      <Typography variant="h5">最近のフィード</Typography>
      <Box
        sx={{
          mx: 4,
        }}
      >
        <Grid container xs={12} sx={{ mt: 3 }}>
          <Paper
            variant="outlined"
            elevation={24}
            sx={{ width: "100%", maxHeight: "70vh", overflow: "auto" }}
          >
            <Grid item>
              {testData.map((data) => (
                <ButtonBase sx={{ width: "100%" }}>
                  <Box
                    p={3}
                    sx={{
                      border: "1px solid #aaaaaa",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    <Typography variant="h6">曲名：{data.song}</Typography>
                    <Typography variant="h6">
                      アーティスト：{data.artist}
                    </Typography>
                    <Typography variant="subtitle2" color="#aaaaaa">
                      翻訳：{data.translater}
                    </Typography>
                    <Typography variant="subtitle2" color="#aaaaaa">
                      英詞：{data.wm}
                    </Typography>
                    <Typography variant="subtitle2" color="#aaaaaa">
                      和訳：{data.jm}
                    </Typography>
                    <Grid item sx={{ display: "flex", my: 1 }}>
                      <FavoriteIcon sx={{ color: "#aaaaaa", mx: 1 }} />
                      <Typography variant="subtitle2" color="#aaaaaa">
                        {data.liked}
                      </Typography>
                    </Grid>
                  </Box>
                </ButtonBase>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
};

export default CurrentFeed;
