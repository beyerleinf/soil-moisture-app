import PropTypes, { InferProps } from "prop-types";
import { Plant as PlantType } from "../types";
import Plant from "./Plant";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const plantsListPropTypes = {
  resource: PropTypes.any,
};

const PlantsList: React.FC<InferProps<typeof plantsListPropTypes>> = ({ resource }) => {
  const classes = useStyles();
  const plants: PlantType[] = resource.read();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {plants.map(plant => (
          <Grid item xs key={plant.id}>
            <Plant name={plant.name} moisture={plant.moisture} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PlantsList;
