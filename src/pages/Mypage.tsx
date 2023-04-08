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
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CurrentFeed from "../components/CurrentFeed";
import FavoriteModal from "../components/FavoriteModal";

type HANDLE_CLOSE = {
  (): void;
};

const Mypage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [testData, setTestData] = useState([
    {
      id: "1",
      translater: "userA",
      artist: "Red hot chilli peppers",
      song: "By the way",
      wm: "Standing light to see the show tonight and there's a light on...",
      jm: "今夜のショーを見るために......",
      liked: 21,
    },
    {
      id: "2",
      translater: "userA",
      artist: "Red hot chilli peppers",
      song: "By the way",
      wm: "Standing light to see the show tonight and there's a light on...",
      jm: "今夜のショーを見るために......",
      liked: 10,
    },
    {
      id: "3",
      translater: "userA",
      artist: "Red hot chilli peppers",
      song: "By the way",
      wm: "Standing light to see the show tonight and there's a light on...",
      jm: "今夜のショーを見るために......",
      liked: 12,
    },
  ]);

  const handleClose: HANDLE_CLOSE = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <Grid container direction="row" alignItems="center" sx={{ pl: 4, pt: 2 }}>
        <IconButton>
          <Avatar alt="sample" src="../../public/avatar2.png" />
        </IconButton>
        <Typography sx={{ pl: 2 }}>ユーザー名: yashicov</Typography>
        <Fab
          aria-label="add"
          sx={{
            position: "relative",
            left: "70%",
            bgcolor: "#001000",
            "&: hover": {
              background: "#800000",
            },
          }}
        >
          <AddIcon sx={{ color: "#ffffff" }} />
        </Fab>
      </Grid>
      <Grid container direction="row" xs={12}>
        <Grid item xs={6}>
          {/* <CurrentFeed /> */}
        </Grid>
        <Grid item xs={6}>
          {/* <CurrentFeed /> */}
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        sx={{
          ml: 4,
          bgcolor: "#001000",
          "&: hover": {
            background: "#800000",
          },
        }}
        onClick={() => setOpenModal(true)}
      >
        いいねした投稿
      </Button>
      <FavoriteModal open={openModal} close={handleClose} test={testData} />
    </Box>
  );
};

export default Mypage;
