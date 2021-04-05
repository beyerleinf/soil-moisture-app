import { makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { Suspense } from "react";
import PlantsList from "../../components/PlantsList";
import { fetchPlants } from "../../data/plants-service";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Suspense fallback={<CircularProgress />}>
        <PlantsList resource={fetchPlants()} />
      </Suspense>
    </div>
  );
};

export default HomePage;
