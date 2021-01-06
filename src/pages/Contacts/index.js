import { Grid, Container, LinearProgress } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { ContactsTable } from "./ContactsTable";
import { DATA_VIEW_MODE } from "../../constants";
import { SearchPanel } from "./SearchPanel";
import store from "../../store";
import { observer } from "mobx-react-lite";
import { ContactsCards } from "./ContactsCards";
import { Header } from "./Header";
import { useFilter } from "./useFilter";
import { Statistic } from "./../Contacts/Statistic";
// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: { "&>*": { justifyContent: "center" } },
    headContainer: {
      marginTop: theme.spacing(2),
    },
    content: {
      marginBottom: theme.spacing(2),
    },
  })
);
//body
export const Contacts = observer(() => {
  const classes = useStyles();
  const { isLoading, isError, dataViewMode, currentPage } = store;
  const [currentUsers, pagesCount, handleChange, orderHandler] = useFilter();

  //render
  return (
    <Container className={classes.root}>
      <Grid container>
        <Header />
        <Grid item xs={12}>
          <SearchPanel />
        </Grid>
        <Pagination
          page={currentPage}
          onChange={handleChange}
          count={pagesCount}
        />
        <Grid item xs={12} className={classes.content}>
          {isError ? (
            <div data-testid="contacts-error"> Fetch Error </div>
          ) : null}
          {dataViewMode === DATA_VIEW_MODE.TABLE ? (
            <ContactsTable orderHandler={orderHandler} data={currentUsers} />
          ) : (
            <ContactsCards data={currentUsers} />
          )}
          {isLoading ? (
            <LinearProgress data-testid="contacts-loader" />
          ) : (
            <Statistic />
          )}
        </Grid>
      </Grid>
    </Container>
  );
});
