import React from "react";
import { Modal, Paper, Grid, Box, ButtonBase, Typography } from "@mui/material";

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
          alignItems: "center",
          pt: 6,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{ height: "70vh" }}
        >
          <Grid item>
            <Box sx={{ overflow: "auto", maxHeight: "70vh" }}>
              {props.test.map((data: any) => (
                <Grid item>
                  <ButtonBase>
                    <Box
                      p={3}
                      sx={{
                        border: "1px solid #aaaaaa",
                        textAlign: "left",
                        overflow: "hidden",
                        bgcolor: "#f9f9f9",
                      }}
                    >
                      <Typography variant="h6" color="#002000">
                        {data.song}
                      </Typography>
                      <Typography variant="h6" color="#002000">
                        {data.artist}
                      </Typography>
                      <Typography variant="subtitle2" color="#606060">
                        {data.translater}
                      </Typography>
                      <Typography variant="subtitle2" color="#606060">
                        {data.liked}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="#606060"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {data.wm}
                      </Typography>
                    </Box>
                  </ButtonBase>
                </Grid>
              ))}
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                border: "1px solid #aaaaaa",
                height: "63.7vh",
                width: "30vw",
                bgcolor: "#f9f9f9",
              }}
            >
              <Typography variant="h5" color="#aaaaaa">
                アイテムを選択してください
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default FavoriteModal;
