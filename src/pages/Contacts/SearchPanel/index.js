import { makeStyles } from "@material-ui/core/styles";
import {MenuItem,InputLabel,FormControl,Select,OutlinedInput,InputAdornment,Button,Grid,Paper} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search";
import store from "../../../store";
import { observer } from "mobx-react-lite";
import { GENDER } from "../../../constants";

// styles
const useStyles = makeStyles((theme) => ({
	searchBlock: {
		marginTop:theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  input_item: { maxHeight:theme.spacing(5) ,minWidth: theme.spacing(40), width: "100%" },
  clear_btn: {
    height: theme.spacing(5),
  },
  paper: {
	width: "100%",
    padding: theme.spacing(2),
  },
}));

//body
export const SearchPanel = observer(() => {
  const classes = useStyles();
  const { filter } = store;
  return (
    <Grid container className={classes.searchBlock}>
      <Paper variant='outlined' className={classes.paper}>
        <Grid container spacing={3}>
          {/* поиск по имени */}
          <Grid item xs={12} sm={12} md={6} xl={4}>
            <OutlinedInput
			  value={filter.searchText}
              onChange={e => store.setSearchText(e.target.value)}
              className={classes.input_item}
              placeholder="Search by name"
              endAdornment={<InputAdornment>
                			  <SearchIcon />
                			</InputAdornment>}/>
          </Grid>
          {/* выбор пола */}
          <Grid item xs={12} sm={12} md={6} xl={4} >
            <FormControl variant="outlined"className={classes.input_item} >
              <InputLabel id="gender">Gender</InputLabel>
              <Select className={classes.input_item}
                id="gender"
                label="gender"
				value={filter.gender}
                onChange={e => store.setGender(e.target.value)}
              >
                <MenuItem  value={GENDER.ALL}>All</MenuItem>
                <MenuItem  value={GENDER.MALE}>Male</MenuItem>
                <MenuItem  value={GENDER.FEMALE}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* поиск по национальности*/}
          <Grid item xs={12} sm={12} md={6} xl={4}>
            <OutlinedInput
              value={filter.nationality}
              onChange={e => store.setNat(e.target.value)}
              className={classes.input_item}
              placeholder="Search by nationality"
            />
          </Grid>
          {/* кнопка очистки инпутов */}
          <Button
			fullWidth
            className={classes.clear_btn}
			onClick={() => {store.setSearchText("");
							store.setGender(GENDER.ALL);
							store.setNat("")}}>
            Clear
          </Button>
          {/* закрывающие теги */}
        </Grid>
      </Paper>
    </Grid>
  );
});
