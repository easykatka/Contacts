// TODO searchpanel
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import SearchPanelStore from "../../../store/searchPanelStore";
import { observer } from "mobx-react-lite";
import {useEffect} from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
  input_item: { minWidth: theme.spacing(40) },
  clear_btn: {
    width: "100%",
    height: "100%",
  },
  paper: {
    width: "100%",
    padding: theme.spacing(1),
  },
}));

export const SearchPanel = observer (() => {
  const classes = useStyles();
  const {filter} = SearchPanelStore
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        {/* контейнер для item */}
        <Grid container spacing={3}>
          {/* первый инпут */}
          <Grid item xs>
            <OutlinedInput
              size="small"
              value={filter.searchText}
              onChange={(e) =>
				(filter.searchText = e.target.value )}
              className={classes.input_item}
              placeholder="Search by full name"
              endAdornment={
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Grid>
          {/* выбор пола */}
          <Grid item xs>
            <FormControl variant="outlined" className={classes.input_item}>
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                value={filter.gender}
                onClick={(e) =>
					filter.gender = e.target.value }
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* инпут последний */}
          <Grid item xs>
            <OutlinedInput
              value={filter.nationality}
              onChange={(e) =>
                filter.nationality = e.target.value}
              className={classes.input_item}
              placeholder="Nationality"
            />
          </Grid>
          {/* кнопка очистки */}
          <Grid item xs>
            <Button
              size="small"
              className={classes.clear_btn}
              onClick={() =>
                (filter.searchText = "", filter.gender = "all", filter.nationality = "" )}
            >
              Clear
            </Button>
          </Grid>
          {/* закрывающие теги */}
        </Grid>
      </Paper>
    </Grid>
  )
}
)