import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import store from "../../../store";
import { ToggleDataViewMode } from "../ToggleDataViewMode";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    headContainer: {
      marginTop: theme.spacing(2),
	},
	refresh_button: {
		marginRight: theme.spacing(1),
	  },
  })
);
export const Header = () => {
	const classes = useStyles();
  const { getContacts } = store;
  return (
    <Grid item xs={12}
      className={classes.headContainer} >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component="h1">
          Contacts
        </Typography>
        <Box display="flex">
          <IconButton
            className={classes.refresh_button}
            aria-label="refresh"
            onClick={() => getContacts()}
          >
            <RefreshIcon />
          </IconButton>
          <ToggleDataViewMode />
        </Box>
      </Box>
    </Grid>
  );
};
