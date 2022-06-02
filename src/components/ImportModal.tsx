import React from "react";
import {
  Modal,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  ButtonBase,
  Avatar,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface PROPS {
  open: boolean;
  close: any;
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
      borderColor: "#ffffff",
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff",
    },
  },
});

const ImportModal: React.FC<PROPS> = (props) => {
  return (
    <Modal open={props.open} onClose={props.close} sx={{ width: "60%" }}>
      <Paper
        sx={{
          bgcolor: "#001000",
          color: "#ffffff",
          height: "40vh",
        }}
      >
        <Grid container justifyContent="center" sx={{ pt: 8 }}>
          <Grid item>
            <Typography variant="h6">曲名</Typography>
            <Grid item container direction="row">
              <CustomTextField
                InputLabelProps={{ shrink: false }}
                sx={{ background: "#ffffff", width: "30vw" }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#707575",
                  "&: hover": {
                    background: "#505050",
                  },
                }}
              >
                検索
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6">アーティスト名</Typography>
            <Grid item container direction="row">
              <CustomTextField
                InputLabelProps={{ shrink: false }}
                sx={{ background: "#ffffff", width: "30vw" }}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#707575",
                  "&: hover": {
                    background: "#505050",
                  },
                }}
              >
                検索
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default ImportModal;
