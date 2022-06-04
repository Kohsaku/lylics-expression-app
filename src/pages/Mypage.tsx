import React from "react";
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

const Mypage: React.FC = () => {
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
          <CurrentFeed />
        </Grid>
        <Grid item xs={6}>
          <CurrentFeed />
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
      >
        いいねした投稿
      </Button>
    </Box>
  );
};

export default Mypage;
