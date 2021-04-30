import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import VideoPlayer from "../src/components/VideoPlayer";
import Notif from "../src/components/Notifications";
import Options from "../src/components/Options";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          video chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notif />
      </Options>
    </div>
  );
}

export default App;
