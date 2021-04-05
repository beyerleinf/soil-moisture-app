import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes, { InferProps } from "prop-types";
import { ThemeToggler } from "./common/ThemeToggler";
import Box from "@material-ui/core/Box";
import CircularProgress, { CircularProgressProps } from "@material-ui/core/CircularProgress";

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress size={128} variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  //   bullet: {
  //     display: "inline-block",
  //     margin: "0 2px",
  //     transform: "scale(0.8)",
  //   },
  //   title: {
  //     fontSize: 14,
  //   },
  //   pos: {
  //     marginBottom: 12,
  //   },
}));

const plantPropTypes = {
  name: PropTypes.string.isRequired,
  moisture: PropTypes.number.isRequired,
};

const Plant: React.FC<InferProps<typeof plantPropTypes>> = ({ name, moisture }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography variant="h4" gutterBottom>
        {name}
      </Typography>
      {/* <Typography variant="h2">{(moisture * 100).toFixed(2)} %</Typography> */}
      <CircularProgressWithLabel value={moisture * 100} color="secondary" />
    </Paper>
    // <Card className={classes.root}>
    //   <CardContent>
    //     <Typography className={classes.title} color="textSecondary" gutterBottom>
    //       Plant
    //     </Typography>
    //     <Typography variant="h5" component="h2">
    //       {name}
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
};

export default Plant;
