import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  TextField,
  Typography,
  Button,
  Fab,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import CurrentFeed from "../components/CurrentFeed";
import SearchModal from "../components/SearchModal";
import { useNavigate } from "react-router-dom";
import {
  doc,
  getDocs,
  collection,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import { currentFeed, selectLylics } from "../features/lylicsSlice";
import { useSelector, useDispatch } from "react-redux";

type HANDLE_CLOSE = {
  (): void;
};

interface LYLICS {
  uid: string;
  translater: string;
  disclose: boolean;
  process: boolean;
  like: number;
  song: string;
  artist: string;
  japanese: string;
  english: string;
  createdAt: any;
}

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
  const [openModal, setOpenModal] = useState(false);
  const [lylics, setLylics] = useState<LYLICS[]>([
    {
      uid: "",
      translater: "",
      disclose: false,
      process: false,
      like: 0,
      song: "",
      artist: "",
      japanese: "",
      english: "",
      createdAt: "",
    },
  ]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchOpen = () => {
    setOpenModal(true);
  };

  const handleClose: HANDLE_CLOSE = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const q = query(
      collection(db, "lylics"),
      orderBy("createdAt", "desc"),
      limit(3)
    );

    // firestoreから受けるデータを配列に変換する(現状オブジェクト1つしか受けれていない)
    const data = async () => {
      const querySnapshot = await getDocs(q);
      setLylics(
        querySnapshot.docs.map((doc) => ({
          uid: doc.data().uid,
          translater: doc.data().artist,
          disclose: doc.data().disclose,
          process: doc.data().process,
          like: doc.data().like,
          song: doc.data().song,
          artist: doc.data().artist,
          japanese: doc.data().japanese,
          english: doc.data().english,
          createdAt: doc.data().createdAt,
        }))
      );
      console.log(lylics);
    };
    return () => {
      data();
    };
  }, []);

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
                  onClick={handleSearchOpen}
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
                  onClick={handleSearchOpen}
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
                onClick={() => navigate("/post")}
              >
                <AddIcon sx={{ color: "#ffffff" }} />
              </Fab>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} component={Box} sx={{ pt: 6 }}>
          {/* currentFeedを箱だけにして、こちらでlylicsをmapする */}
          {/* <CurrentFeed /> */}
          <Box sx={{ my: 2 }}>
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
                  sx={{ width: "100%", maxHeight: "65vh", overflow: "auto" }}
                >
                  <Grid item>
                    {lylics.map((data) => (
                      <CurrentFeed
                        song={data.song}
                        artist={data.artist}
                        english={data.english}
                        japanese={data.japanese}
                        like={data.like}
                      />
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <SearchModal open={openModal} close={handleClose} />
    </ThemeProvider>
  );
};

export default Home;
