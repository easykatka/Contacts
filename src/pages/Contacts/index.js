import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';

import { ContactsTable } from "./ContactsTable";
import { ToggleDataViewMode } from "./ToggleDataViewMode";
import { DATA_VIEW_MODE } from "../../constants";
import { useDataViewMode } from "./useDataViewMode";
import { SearchPanel } from "./SearchPanel";
import { useEffect } from "react";
import { NATIONALITY_HUMAN_NAME } from "../../constants";
import ContactsStore from "../../store/contactsStore";
import { observer } from "mobx-react-lite";
import SearchPanelStore from "../../store/searchPanelStore";
import { ContactsCards } from "./ContactsCards";

import {useState} from 'react'

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
        (user.name.first + " " + user.name.last)
          .toLowerCase()
          .includes(filter.searchText.toLowerCase())
      )
        return true;
      return false;
    })
    .filter((user) => {
      if (
        NATIONALITY_HUMAN_NAME[user.nat]
          .toLowerCase()
          .includes(filter.nationality.toLowerCase())
      ) 
        return true;
      return false;
    });

  useEffect(() => {
    getContacts();
  }, [getContacts]);




const [currentPage, setcurrentPage] = useState (1);
  const pageSize = 8;
  const pagesCount = Math.ceil(filteredUsers.length/pageSize)
  const indexOfLastPage = currentPage * pageSize
  const indexOfFistPage = indexOfLastPage - pageSize
  const currentUsers = filteredUsers.slice(indexOfFistPage,indexOfLastPage)
  const handleChange = (event, value) => {
    setcurrentPage(value);
  };

  useEffect(()=> {
	setcurrentPage(1)
},[filter.searchText,filter.gender,filter.nationality])
console.log(currentPage)


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
		<Pagination page={currentPage} onChange={handleChange} count={pagesCount} />
        <Grid item xs={12}>
          {(() => {
            if (isLoading) {
              return <LinearProgress />;
            }
            if (isError) {
              return <div>Error</div>;
            }
            if (dataViewMode === DATA_VIEW_MODE.TABLE) {
              return <ContactsTable data={currentUsers} />;
            }
            if (dataViewMode === DATA_VIEW_MODE.GRID) {
              return <ContactsCards data={currentUsers} />;
            }
            return "error";
          })()}
        </Grid>
	
      </Grid>
    </Container>
  );
});
