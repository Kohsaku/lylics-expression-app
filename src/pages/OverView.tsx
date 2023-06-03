import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate, useLocation } from "react-router-dom";

interface LYLICSDATA {
  uid: string;
  disclose: boolean;
  process: boolean;
  like: number;
  song: string;
  artist: string;
  japanese: string;
  english: string;
  createdAt: any;
}

const OverView: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [lylics, setLylics] = useState(location.state as any);

  useEffect(() => {
    console.log(lylics);
  }, [lylics]);

  return (
    <Box>
      <Grid container component={Box} xs={12}>
        <Grid item sx={{ mb: "1vh", pl: "4vw", pt: "5vh" }}>
          <Typography variant="h6">曲名</Typography>
          <Typography variant="h6" sx={{ lineHeight: 2 }}>
            {lylics.propsData.song}
          </Typography>
          <Typography variant="h6">アーティスト名</Typography>
          <Typography variant="h6" sx={{ lineHeight: 2 }}>
            {lylics.propsData.artist}
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          sx={{ mb: "1vh", pl: "4vw" }}
        >
          <Typography variant="subtitle2" color="#aaaaaa" sx={{ mr: 1 }}>
            翻訳者
          </Typography>
          <IconButton>
            <Avatar alt="sample" src="../../public/avatar2.png" />
          </IconButton>
          <Typography variant="subtitle2" color="#aaaaaa" sx={{ mr: 3 }}>
            name
          </Typography>
          <IconButton>
            <FavoriteIcon sx={{ color: "#aaaaaa", p: 0.5 }} />
          </IconButton>
          <Typography variant="subtitle2" color="#aaaaaa">
            {lylics.propsData.like}
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={5}>
            <Typography variant="h6">英詞</Typography>
            <Paper sx={{ overflow: "auto", height: "58vh", p: "1vh" }}>
              <Typography variant="h6" sx={{ lineHeight: 2 }}>
                {lylics.propsData.english}
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            container
            component={Box}
            alignItems="center"
            justifyContent="center"
            xs={1}
            sx={{ overflow: "auto", height: "67vh" }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h6">和訳</Typography>
            <Paper sx={{ overflow: "auto", height: "58vh" }}>
              <Typography variant="h6" sx={{ lineHeight: 2 }}>
                {lylics.propsData.japanese}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end">
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              mr: 8,
              bgcolor: "#001000",
              "&: hover": {
                background: "#800000",
              },
            }}
            onClick={() => navigate("/")}
          >
            戻る
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverView;
