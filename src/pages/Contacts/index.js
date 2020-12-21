import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ContactsTable } from "./ContactsTable";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ToggleDataViewMode } from "./ToggleDataViewMode";
import { DATA_VIEW_MODE } from "../../constants/constants";
import { useDataViewMode } from "./useDataViewMode";
import { SearchPanel } from "./SearchPanel";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import { NATIONALITY_HUMAN_NAME } from "../../constants/nationality";
import ContactsStore from "../../store/contactsStore";
import { observer } from "mobx-react-lite";
import SearchPanelStore from "../../store/searchPanelStore";
import {ContactsCards} from "./ContactsCards";

// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    headContainer: {
      marginTop: theme.spacing(2),
    },
    refresh_button: {
      marginRight: theme.spacing(1),
    },
  })
);
//body
export const Contacts = observer(() => {
  const classes = useStyles();
  const { getContacts, users, isLoading, isError } = ContactsStore;
  const [dataViewMode, setdataViewMode] = useDataViewMode();
  const { filter } = SearchPanelStore;

  const filteredUsers = users
    .filter((user) => filter.gender === "all" || user.gender === filter.gender)
    .filter((user) => {
      if (
        (
          user.name.first.toLowerCase() +
          " " +
          user.name.last.toLowerCase()
        ).includes(filter.searchText.toLowerCase())
      )
        return true;
    })
    .filter((user) => {
      if (
        NATIONALITY_HUMAN_NAME[user.nat].toLowerCase().includes(
          filter.nationality.toLowerCase())
      )
        return true;
    });

  useEffect(() => {
    getContacts();
  }, [getContacts]);

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
              <IconButton
                className={classes.refresh_button}
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
        <Grid item xs={12}>
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
              return <ContactsTable data={filteredUsers} />;
            }
            if (dataViewMode === DATA_VIEW_MODE.GRID) {
              return <ContactsCards data={filteredUsers}/>
            }
            return "error";
          })()}
        </Grid>
      </Grid>
    </Container>
  );
});
