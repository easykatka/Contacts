import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useContacts } from "./useContacts";
import Typography from "@material-ui/core/Typography";
import { ContactsTable } from "./ContactsTable";
import LinearProgress from "@material-ui/core/LinearProgress";
import {ToggleDataViewMode} from './ToggleDataViewMode'
import {DATA_VIEW_MODE} from './constants'
import {useDataViewMode} from './useDataViewMode'
// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    headContainer: {
		marginTop : theme.spacing(4),
      marginBottom: theme.spacing(3),
    },
  })
);
//body
export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();
  const [dataViewMode, setdataViewMode] = useDataViewMode();
//return
  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
		<Box display="flex" justifyContent="space-between">
          <Typography variant="h5" component="h1">
            Contacts
          </Typography>
		  <ToggleDataViewMode dataViewMode={dataViewMode} setdataViewMode={setdataViewMode} DATA_VIEW_MODE={DATA_VIEW_MODE}/>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <LinearProgress />;
            }
            if (contacts.isError) {
              return <div>Error</div>;
            }
            if (dataViewMode === DATA_VIEW_MODE.TABLE) {
              return <ContactsTable data={contacts.data} />;
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
