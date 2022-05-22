import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  InputBase,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { width } from "@mui/system";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Post: React.FC = () => {
  const [lylics, setLylics] = useState(
    "Standing in line to see the show tonight And there's a light on, heavy glow. By the way, I tried to say I'd be there waiting for Dani, the girl, is singing songs to me beneath the marquee, overload. Steak knife, card shark Con job, boot cut Skin that flick, she’s such a little DJ To get there quick by street but not the freeway Turn that trick to make a little leeway Beat that nic, but not the way that we playDogtown, blood bath Rib cage, soft tail Standing in line to see the show tonight And there’s a light on, heavy glow By the way, I tried to say I’d be there waiting for Black jack, dope dick Pawn shop, quick pick Kiss that dyke, I know you want to hold one Not on strike but I’m about to bowl one Bite that mic, I know you never stole one Girls that like a story, so I told one Song bird, main line Cash back, hard top"
  );
  return (
    <Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          mb: 2,
          bgcolor: "#001000",
          "&: hover": {
            background: "#800000",
          },
        }}
      >
        英語の歌詞をインポートする
      </Button>
      <Grid container>
        <Grid item flexDirection="column">
          <Typography variant="h6">曲名</Typography>
          <Typography variant="h6">アーティスト名</Typography>
        </Grid>
        <Typography variant="h6" sx={{ lineHeight: 4, position: "static" }}>
          {lylics}
        </Typography>
        <BootstrapInput
          id="bootstrap-input"
          fullWidth={true}
          sx={{ lineHeight: 4, position: "static", top: "10%" }}
        />
        <FormControl>
          <FormLabel>最近のフィードへの表示</FormLabel>
          <RadioGroup row>
            <FormControlLabel value="on" control={<Radio />} label="ON" />
            <FormControlLabel value="off" control={<Radio />} label="OFF" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            mb: 2,
            bgcolor: "#001000",
            "&: hover": {
              background: "#800000",
            },
          }}
        >
          save
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            mb: 2,
            bgcolor: "#001000",
            "&: hover": {
              background: "#800000",
            },
          }}
        >
          post
        </Button>
      </Grid>
    </Box>
  );
};

export default Post;
