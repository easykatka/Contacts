import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useContacts } from "./useContacts";
import Typography from "@material-ui/core/Typography";
import { ContactsTable } from "./ContactsTable";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ToggleDataViewMode } from "./ToggleDataViewMode";
import { DATA_VIEW_MODE } from "./constants";
import { useDataViewMode } from "./useDataViewMode";
import { SearchPanel } from "./SearchPanel";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    headContainer: {
      marginTop: theme.spacing(3),
	},
	refresh_button: {
		marginRight: theme.spacing(1),
	},
  })
);
//body
export const Contacts = () => {
  const classes = useStyles();
  const [getContacts, data, isLoading, isError] = useContacts();
  const [dataViewMode, setdataViewMode] = useDataViewMode();
  useEffect(() => {
    getContacts();
  }, []);
  //return
  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" component="h1">
              Contacts
            </Typography>
            <Box display="flex">
              <IconButton className={classes.refresh_button}
                aria-label="refresh"
                
                onClick={() => getContacts()}
              >
                <RefreshIcon />
              </IconButton>
              <ToggleDataViewMode
                dataViewMode={dataViewMode}
                setdataViewMode={setdataViewMode}
                DATA_VIEW_MODE={DATA_VIEW_MODE}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} className={classes.headContainer}>
          <Box display="flex" justifyContent="space-between">
            <SearchPanel />
          </Box>
        </Grid>

        <Grid item xs={12}>
          {(() => {
            if (isLoading) {
              return <LinearProgress />;
            }
            if (isError) {
              return <div>Error</div>;
            }
            if (dataViewMode === DATA_VIEW_MODE.TABLE) {
              return <ContactsTable data={data} />;
            }
            if (dataViewMode === DATA_VIEW_MODE.GRID) {
              return "grid";
            }
            return "error";
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
