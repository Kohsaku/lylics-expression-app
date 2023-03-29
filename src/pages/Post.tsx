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
import { db } from "../firebase";
import {
  doc,
  setDoc,
  Timestamp,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

type HANDLE_CLOSE = {
  (): void;
};

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
  // 入力内容をステートに保存し、保存or投稿ボタンを押すとfirestoreへ保存させる
  const [lylicsData, setLylicsData] = useState<LYLICSDATA>({
    uid: "",
    disclose: false,
    process: false,
    like: 0,
    song: "",
    artist: "",
    japanese: "",
    english: "",
    createdAt: null,
  });

  const user = useSelector(selectUser);
  const lylicsRef = collection(db, "lylics");
  const docRef = doc(lylicsRef);

  const handleSongChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLylicsData({ ...lylicsData, song: e.target.value, uid: user.uid });
  };

  const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLylicsData({ ...lylicsData, artist: e.target.value });
  };

  const handleEnglishChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLylicsData({ ...lylicsData, english: e.target.value });
  };

  const handleJapaneseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLylicsData({ ...lylicsData, japanese: e.target.value });
  };

  const handleDiscloseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLylicsData({ ...lylicsData, disclose: true });
  };

  const handleCloseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLylicsData({ ...lylicsData, disclose: false });
  };

  // submitするとfirestoreに保存されるようにする
  // submit時にtimestampを付与し、processをtrueに変える。
  // setLylicsDataでstate変更し、setDocを行うとtimestampとprocessが反映されない。
  // そのためsetDoc内でcreatedAtとprocessに値を入れる。
  // toDateまでつけなければinvalid data errorになる
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitData = {
      uid: lylicsData.uid,
      disclose: lylicsData.disclose,
      process: true,
      like: lylicsData.like,
      song: lylicsData.song,
      artist: lylicsData.artist,
      japanese: lylicsData.japanese,
      english: lylicsData.english,
      createdAt: serverTimestamp(),
    };
    setDoc(docRef, submitData);
    setLylicsData({
      uid: "",
      disclose: false,
      process: false,
      like: 0,
      song: "",
      artist: "",
      japanese: "",
      english: "",
      createdAt: null,
    });
  };

  // submitするとfirestoreに保存されるようにする
  // submit時にtimestampとuidを付与する
  // toDateまでつけなければinvalid data errorになる
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitData = {
      uid: lylicsData.uid,
      disclose: lylicsData.disclose,
      process: false,
      like: lylicsData.like,
      song: lylicsData.song,
      artist: lylicsData.artist,
      japanese: lylicsData.japanese,
      english: lylicsData.english,
      createdAt: serverTimestamp(),
    };
    setDoc(docRef, submitData);
    setLylicsData({
      uid: "",
      disclose: false,
      process: false,
      like: 0,
      song: "",
      artist: "",
      japanese: "",
      english: "",
      createdAt: null,
    });
  };

  useEffect(() => {
    let urls =
      "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=by%20the%20way&q_artist=red%20hot%20chili%20peppers&apikey=3c77046c4a9009e6428a7a88defb2de1";
    let requests = fetch(urls);
    const fetchData = async () => {
      const result = await requests;
      console.log(result.body);
    };
    fetchData();
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
        <Grid item sx={{ mb: "1vh", pl: "4vw", width: "30%" }}>
          <Typography variant="h6">曲名</Typography>
          <CustomTextField
            variant="standard"
            InputLabelProps={{ shrink: false }}
            multiline
            fullWidth
            placeholder="曲名を入力してください"
            onChange={handleSongChange}
          />
          <Typography variant="h6">アーティスト名</Typography>
          <CustomTextField
            variant="standard"
            InputLabelProps={{ shrink: false }}
            multiline
            fullWidth
            placeholder="アーティスト名を入力してください"
            onChange={handleArtistChange}
          />
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
                <CustomTextField
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  multiline
                  fullWidth
                  placeholder="英詞を入力してください。"
                  onChange={handleEnglishChange}
                />
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
                onChange={handleJapaneseChange}
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
            <RadioGroup row defaultValue="false">
              <FormControlLabel
                value="true"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#004000",
                      },
                    }}
                    onChange={handleDiscloseChange}
                  />
                }
                label="ON"
              />
              <FormControlLabel
                value="false"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#004000",
                      },
                    }}
                    onChange={handleCloseChange}
                  />
                }
                label="OFF"
              />
            </RadioGroup>
          </FormControl>
          <form onSubmit={handleSave}>
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
          </form>
          <form onSubmit={handleSubmit}>
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
          </form>
        </Grid>
      </Grid>
      <ImportModal open={openModal} close={handleClose} />
    </Box>
  );
};

export default Post;
