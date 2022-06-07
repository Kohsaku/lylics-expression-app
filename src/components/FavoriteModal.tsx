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
  jm: string;
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
    jm: "",
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
      jm: data.jm,
    });
  };
  return (
    <Modal
      open={props.open}
      onClose={props.close}
      sx={{ width: "90%", top: "15%", left: "5%" }}
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
          justifyContent="center"
          direction="row"
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
                  height: "63.75vh",
                  width: "30vw",
                  bgcolor: "#f9f9f9",
                  overflow: "auto",
                  maxHeight: "70vh",
                  textAlign: "left",
                }}
              >
                {selected ? (
                  <Box>
                    <Typography variant="h5" color="#002000">
                      Song: {selectedItem.song}
                    </Typography>
                    <Typography variant="h5" color="#002000">
                      Artist: {selectedItem.artist}
                    </Typography>
                    <Typography variant="subtitle2" color="#002000">
                      翻訳者: {selectedItem.translater}
                    </Typography>
                    <Typography variant="subtitle2" color="#002000">
                      いいね数: {selectedItem.liked}
                    </Typography>
                    <Typography variant="h5" color="#002000">
                      英詞
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #aaaaaa",
                        maxheight: "20vh",
                        width: "30vw",
                        bgcolor: "#f9f9f9",
                        overflow: "auto",
                      }}
                    >
                      <Typography variant="h5" color="#002000">
                        {selectedItem.wm}
                      </Typography>
                    </Box>
                    <Typography variant="h5" color="#002000">
                      和訳
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #aaaaaa",
                        maxheight: "20vh",
                        width: "30vw",
                        bgcolor: "#f9f9f9",
                        overflow: "auto",
                      }}
                    >
                      <Typography variant="h5" color="#002000">
                        {selectedItem.jm}
                      </Typography>
                    </Box>
                  </Box>
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
