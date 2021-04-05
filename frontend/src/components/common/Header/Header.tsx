import { Avatar, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes, { InferProps } from "prop-types";
import React from "react";

const headerPropTypes = {
  menuButtonClick: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const Header: React.FC<InferProps<typeof headerPropTypes>> = ({ menuButtonClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={menuButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Plant Manager
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Button>
            <Avatar className={classes.avatar}>FB</Avatar>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = headerPropTypes;
