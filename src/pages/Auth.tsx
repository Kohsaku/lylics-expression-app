import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import Modal from "@mui/material/Modal";
import SendIcon from "@mui/icons-material/Send";
import CameraIcon from "@mui/icons-material/Camera";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth, provider, storage } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
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

const avatarImageStyle = {
  cursor: "pointer",
  color: "gray",
};

const avatarAddedImageStyle = {
  cursor: "pointer",
  color: "#001000",
};

const theme = createTheme();

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const signInEmail = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    setIsLogin(true);
    navigate("/");
  };

  const signUpEmail = async () => {
    const authUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    let url = "";
    if (avatarImage) {
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");
      const fileName = randomChar + "_" + avatarImage.name;
      const storageRef = ref(storage, `avatars/${fileName}`);
      await uploadBytes(storageRef, avatarImage);
      url = await getDownloadURL(ref(storage, `avatars/${fileName}`));
    }
    await updateProfile(authUser.user, {
      displayName: username,
      photoURL: url,
    });
    setIsLogin(true);
    navigate("/");
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).catch((err) => alert(err.message));
    navigate("/");
  };

  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setAvatarImage(e.target.files![0]);
      e.target.value = "";
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "92vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1562734041-a2d56f060a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#800000" }}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isLogin ? "Login" : "Register"}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {/* signup components start */}
              {!isLogin && (
                <>
                  <CustomTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <Box textAlign="center">
                    <IconButton>
                      <label>
                        <AccountCircleIcon
                          fontSize="large"
                          sx={
                            avatarImage
                              ? avatarAddedImageStyle
                              : avatarImageStyle
                          }
                        />
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={onChangeImageHandler}
                        />
                      </label>
                    </IconButton>
                  </Box>
                </>
              )}
              {/* signup components end */}
              {/* login components start */}
              <CustomTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
              <CustomTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    sx={{
                      color: "#001000",
                      "&.Mui-checked": { color: "#001000" },
                    }}
                  />
                }
                label="Remember me"
              />
              {/* login components end */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  bgcolor: "#001000",
                  "&: hover": {
                    background: "#800000",
                  },
                }}
                onClick={
                  isLogin
                    ? async () => {
                        try {
                          await signInEmail();
                        } catch (err: any) {
                          alert(err.message);
                        }
                      }
                    : async () => {
                        try {
                          await signUpEmail();
                        } catch (err: any) {
                          alert(err.message);
                        }
                      }
                }
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<CameraIcon />}
                sx={{
                  mb: 1,
                  bgcolor: "#001000",
                  "&: hover": {
                    background: "#800000",
                  },
                }}
                onClick={signInWithGoogle}
              >
                SignIn with Google
              </Button>
              <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Paper
                  style={getModalStyle()}
                  sx={{
                    outline: "none",
                    position: "absolute",
                    width: 400,
                    borderRadius: 10,
                    backgroundColor: "white",
                    boxShadow: theme.shadows[5],
                    padding: theme.spacing(10),
                  }}
                >
                  <CustomTextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="email"
                    name="email"
                    label="Reset E-mail"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setResetEmail(e.target.value);
                    }}
                  />
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                </Paper>
              </Modal>
              <Grid container>
                <Grid item xs>
                  <ButtonBase onClick={() => setOpenModal(true)}>
                    <Link
                      href="#"
                      variant="body2"
                      underline="none"
                      sx={{ color: "#001000" }}
                    >
                      Forgot password?
                    </Link>
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <ButtonBase onClick={() => setIsLogin(!isLogin)}>
                    <Link
                      href="#"
                      variant="body2"
                      underline="none"
                      sx={{ color: "#001000" }}
                    >
                      {isLogin
                        ? "Don't have an account? Sign Up"
                        : "Back to login"}
                    </Link>
                  </ButtonBase>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Auth;
