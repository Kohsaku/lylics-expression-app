import React, { useState } from "react";
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

type HANDLE_CLOSE = {
  (): void;
};

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    outerHeight: "100vh",
  },
  "& label.Mui-focused": {
    color: "#001000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#001000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#001000",
    },
    "&:hover fieldset": {
      borderColor: "#001000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#001000",
    },
  },
});

const OverView: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [lylics, setLylics] = useState(
    "Standing in line to see the show tonight And there's a light on, heavy glow. By the way, I tried to say I'd be there waiting for Dani, the girl, is singing songs to me beneath the marquee, overload. Steak knife, card shark Con job, boot cut Skin that flick, she’s such a little DJ To get there quick by street but not the freeway Turn that trick to make a little leeway Beat that nic, but not the way that we playDogtown, blood bath Rib cage, soft tail Standing in line to see the show tonight And there’s a light on, heavy glow By the way, I tried to say I’d be there waiting for Black jack, dope dick Pawn shop, quick pick Kiss that dyke, I know you want to hold one Not on strike but I’m about to bowl one Bite that mic, I know you never stole one Girls that like a story, so I told one Song bird, main line Cash back, hard top"
  );

  const handleSearchOpen = () => {
    setOpenModal(true);
  };

  const handleClose: HANDLE_CLOSE = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <Grid container component={Box} xs={12}>
        <Grid item sx={{ mb: "1vh", pl: "4vw", pt: "5vh" }}>
          <Typography variant="h6">曲名</Typography>
          <Typography variant="h6">アーティスト名</Typography>
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
          <Avatar alt="sample" src="../../public/avatar2.png" sx={{ mr: 1 }} />
          <Typography variant="subtitle2" color="#aaaaaa" sx={{ mr: 3 }}>
            name
          </Typography>
          <IconButton>
            <FavoriteIcon sx={{ color: "#aaaaaa", p: 0.5 }} />
          </IconButton>
          <Typography variant="subtitle2" color="#aaaaaa">
            21
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
                {lylics}
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
            <Paper sx={{ overflow: "auto", height: "58vh" }}></Paper>
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
          >
            戻る
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverView;
