import React, { useState } from "react";
import { Modal, Paper, Grid, Box, ButtonBase, Typography } from "@mui/material";

interface PROPS {
  open: boolean;
  close: any;
  test: any;
}

interface DATA {
  id: string;
  song: string;
  artist: string;
  translater: string;
  liked: number;
  wm: string;
}

const FavoriteModal: React.FC<PROPS> = (props) => {
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: "",
    song: "",
    artist: "",
    translater: "",
    liked: 0,
    wm: "",
  });

  const handleClick: any = (data: DATA) => {
    setSelected(true);
    setSelectedItem({
      id: data.id,
      song: data.song,
      artist: data.artist,
      translater: data.translater,
      liked: data.liked,
      wm: data.wm,
    });
  };
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
                <Grid item key={data.id}>
                  <ButtonBase onClick={() => handleClick(data)}>
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
            <ButtonBase>
              <Box
                sx={{
                  border: "1px solid #aaaaaa",
                  height: "63.7vh",
                  width: "30vw",
                  bgcolor: "#f9f9f9",
                }}
              >
                {selected ? (
                  <Typography variant="h5" color="#aaaaaa">
                    {selectedItem.id}
                  </Typography>
                ) : (
                  <Typography variant="h5" color="#aaaaaa">
                    アイテムを選択してください
                  </Typography>
                )}
              </Box>
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default FavoriteModal;
