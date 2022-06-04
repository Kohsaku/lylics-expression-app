import React from "react";
import { Modal, Paper, TextField, Grid, Box, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

interface PROPS {
  open: boolean;
  close: any;
  test: any;
}

const FavoriteModal: React.FC<PROPS> = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.close}
      sx={{ width: "75%", top: "15%", left: "12%" }}
    >
      <Paper
        sx={{
          bgcolor: "#001000",
          color: "#ffffff",
          height: "70vh",
          borderRadius: "25px",
        }}
      >
        <Grid container justifyContent="center" sx={{ pt: 8 }}>
          {props.test.map((data: any) => (
            <ButtonBase>
              <Box
                p={3}
                sx={{
                  border: "1px solid #aaaaaa",
                  textAlign: "left",
                }}
              >
                {data.translater}
                {data.song}
                {data.artist}
                {data.liked}
                {data.wm}
              </Box>
            </ButtonBase>
          ))}
          <Box
            p={3}
            sx={{
              border: "1px solid #aaaaaa",
            }}
          ></Box>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default FavoriteModal;
