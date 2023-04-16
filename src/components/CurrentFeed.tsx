import React, { useState } from "react";
import { Box, Grid, Typography, ButtonBase, Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

interface PROPS {
  // uid: string;
  // disclose: boolean;
  // process: boolean;
  like: number;
  song: string;
  artist: string;
  japanese: string;
  english: string;
  // createdAt: any;
}

const CurrentFeed: React.FC<PROPS> = (props) => {
  const navigate = useNavigate();

  return (
    <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("overview")}>
      <Box
        p={3}
        sx={{
          border: "1px solid #aaaaaa",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Grid item sx={{ display: "flex" }}>
          <Avatar alt="sample" src="../../public/avatar2.png" sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ mt: 1, ml: 1 }}>
            曲名：{props.song}
          </Typography>
        </Grid>
        <Typography variant="h6">アーティスト：{props.artist}</Typography>
        <Typography variant="subtitle2" color="#aaaaaa">
          翻訳：{props.artist}
        </Typography>
        <Typography variant="subtitle2" color="#aaaaaa">
          英詞：{props.english}
        </Typography>
        <Typography variant="subtitle2" color="#aaaaaa">
          和訳：{props.japanese}
        </Typography>
        <Grid item sx={{ display: "flex", my: 1 }}>
          <FavoriteIcon sx={{ color: "#aaaaaa", mx: 1 }} />
          <Typography variant="subtitle2" color="#aaaaaa">
            {props.like}
          </Typography>
        </Grid>
      </Box>
    </ButtonBase>
  );
};

export default CurrentFeed;
