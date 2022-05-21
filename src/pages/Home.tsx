import React from "react";
import { Grid, Box, TextField, Typography, Button, Fab } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import CurrentFeed from "../components/CurrentFeed";

const CustomTextField = styled(TextField)({
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

const theme = createTheme();

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid component="main" container>
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: "flex",
            }}
          >
            <Grid item flexDirection="column" sx={{ width: "100%" }}>
              <Typography variant="h6" sx={{ margin: "2vh" }}>
                曲名から探す
              </Typography>
              <Grid item>
                <CustomTextField fullWidth id="song" label="Song" name="song" />
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    ml: 1,
                    bgcolor: "#001000",
                    "&: hover": {
                      background: "#800000",
                    },
                  }}
                >
                  検索
                </Button>
              </Grid>
              <Typography variant="h6" sx={{ margin: "2vh" }}>
                アーティストから探す
              </Typography>
              <Grid>
                <CustomTextField
                  fullWidth
                  id="artist"
                  label="Artist"
                  name="artist"
                />
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    ml: 1,
                    bgcolor: "#001000",
                    "&: hover": {
                      background: "#800000",
                    },
                  }}
                >
                  検索
                </Button>
              </Grid>
              <Fab
                aria-label="add"
                sx={{
                  mt: 10,
                  ml: 4,
                  bgcolor: "#001000",
                  "&: hover": {
                    background: "#800000",
                  },
                }}
              >
                <AddIcon sx={{ color: "#ffffff" }} />
              </Fab>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} component={Box}>
          <CurrentFeed />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
