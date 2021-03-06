import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImportModal from "../components/ImportModal";

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

const Post: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [lylics, setLylics] = useState(
    "Standing in line to see the show tonight And there's a light on, heavy glow. By the way, I tried to say I'd be there waiting for Dani, the girl, is singing songs to me beneath the marquee, overload. Steak knife, card shark Con job, boot cut Skin that flick, she’s such a little DJ To get there quick by street but not the freeway Turn that trick to make a little leeway Beat that nic, but not the way that we playDogtown, blood bath Rib cage, soft tail Standing in line to see the show tonight And there’s a light on, heavy glow By the way, I tried to say I’d be there waiting for Black jack, dope dick Pawn shop, quick pick Kiss that dyke, I know you want to hold one Not on strike but I’m about to bowl one Bite that mic, I know you never stole one Girls that like a story, so I told one Song bird, main line Cash back, hard top"
  );

  useEffect(() => {
    var MusixmatchApi = require("../../build/javascript-client/src/index");
    var defaultClient = MusixmatchApi.ApiClient.instance;
    var key = defaultClient.authentications["key"];
    key.apiKey = ""; // {String}
    var opts = {
      format: "json", // {String} output format: json, jsonp, xml.
    };
    var trackId = 15445219; // {number}
    new MusixmatchApi.TrackApi().trackGetGet(
      trackId,
      opts,
      (error: any, data: any, response: any) => {
        if (error) {
          console.error(error);
        } else if (response.text) {
          data = JSON.parse(response.text);
          console.log("Returned data:\n%s", JSON.stringify(data, null, 2));
        } else {
          throw new Error("bad response");
        }
      }
    );
  }, []);

  const handleSearchOpen = () => {
    setOpenModal(true);
  };

  const handleClose: HANDLE_CLOSE = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <Button
        type="submit"
        variant="contained"
        onClick={handleSearchOpen}
        sx={{
          mt: 2,
          mb: 2,
          ml: 5,
          bgcolor: "#707575",
          "&: hover": {
            background: "#001000",
          },
        }}
      >
        英語の歌詞をインポートする
      </Button>
      <Grid container component={Box} xs={12}>
        <Grid item sx={{ mb: "1vh", pl: "4vw" }}>
          <Typography variant="h6">曲名</Typography>
          <Typography variant="h6">アーティスト名</Typography>
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
            <Paper sx={{ overflow: "auto", height: "58vh" }}>
              <CustomTextField
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                multiline
                fullWidth
                placeholder="和訳を入力してください。"
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end">
          <FormControl sx={{ mr: 5 }}>
            <FormLabel
              sx={{
                color: "#004000",
                "&.Mui-focused": {
                  color: "#004000",
                },
              }}
            >
              最近のフィードへの表示
            </FormLabel>
            <RadioGroup row>
              <FormControlLabel
                value="on"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#004000",
                      },
                    }}
                  />
                }
                label="ON"
              />
              <FormControlLabel
                value="off"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#004000",
                      },
                    }}
                  />
                }
                label="OFF"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              mr: 2,
              bgcolor: "#001000",
              "&: hover": {
                background: "#004000",
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
              mr: 8,
              bgcolor: "#001000",
              "&: hover": {
                background: "#800000",
              },
            }}
          >
            post
          </Button>
        </Grid>
      </Grid>
      <ImportModal open={openModal} close={handleClose} />
    </Box>
  );
};

export default Post;
