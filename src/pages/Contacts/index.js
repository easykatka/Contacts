import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';
import { ContactsTable } from "./ContactsTable";
import { DATA_VIEW_MODE } from "../../constants";
import { SearchPanel } from "./SearchPanel";

import store from "../../store";
import { observer } from "mobx-react-lite";
import { ContactsCards } from "./ContactsCards";
import {Header} from './Header'
import {useFilter} from './useContacts'
// styles
const useStyles = makeStyles((theme) => createStyles({
    root: {"&>*" : { justifyContent:'center' }},
    headContainer: {
      marginTop: theme.spacing(2),
    },
  })
);
//body
export const Contacts = observer(() => {
  const classes = useStyles();
  const {isLoading, isError , dataViewMode , currentPage } = store;
  const [currentUsers,pagesCount,handleChange] = useFilter ()
//render
  return (
    <Container className={classes.root}>
      <Grid container>
      <Header />
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <SearchPanel />
          </Box>
        </Grid>
		<Pagination  page={currentPage} onChange={handleChange} count={pagesCount} />
        <Grid item xs={12}>
          {(() => {
            if (isLoading) { return <LinearProgress />;}
            if (isError) { return <div> Fetch Error </div>  ;}
            if (dataViewMode === DATA_VIEW_MODE.TABLE) { return <ContactsTable data={currentUsers} />;}
            if (dataViewMode === DATA_VIEW_MODE.GRID) { return <ContactsCards data={currentUsers} />;}
            return "error";
          })()}
        </Grid>
      </Grid>
    </Container>
  );
});
