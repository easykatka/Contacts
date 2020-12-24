import {Grid,Container,LinearProgress} from "@material-ui/core";
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
import {Statistic} from './../Contacts/Statistic'
// styles
const useStyles = makeStyles((theme) => createStyles({
    root: {"&>*" : { justifyContent:'center' }},
    headContainer: {
      marginTop: theme.spacing(2),
	},
	content: {
		marginBottom: theme.spacing(2),
	}
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
            <SearchPanel />
        </Grid>
		<Pagination  page={currentPage} onChange={handleChange} count={pagesCount} />
        <Grid item xs={12} className={classes.content}>
          {(() => { 
            if (isLoading) { return <LinearProgress />;}
            if (isError) { return <div> Fetch Error </div>  ;}
            if (dataViewMode === DATA_VIEW_MODE.TABLE) { return <ContactsTable data={currentUsers} />;}
            if (dataViewMode === DATA_VIEW_MODE.GRID) { return <ContactsCards data={currentUsers} />;}
            return "error";
          })()}
		  </Grid>
		  <Grid item xs={12}>
			  <Statistic/>
		  </Grid>
        </Grid>
     
    </Container>
  );
});
