import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";
import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Avatar src={avatar} alt="Jacob Rodgers" className={classes.avatar} />
      <Typography variant="h4" className={classes.title}>
        <Typed strings={["Jacob Rodgers"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h5" className={classes.subtitle}>
        <Typed
          strings={["React", "Python", "Rust", "Embedded", "Web Dev"]}
          typeSpeed={40}
          backSpeed={60}
          loop={true}
        />
      </Typography>
    </Box>
  );
};

export default Header;
