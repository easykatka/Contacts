// TODO searchpanel
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingBottom:theme.spacing(2),
	},
  input_item: {  minWidth:theme.spacing(40),},
  clear_btn: {
	  width:'100%',
  height:'100%',
  },
  paper: {
	  width: '100%',
	  padding:theme.spacing(1)
  }
}));

export const SearchPanel = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
		<Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs>
          <OutlinedInput 
            size="small"
            className={classes.input_item}
            placeholder="Search by full name"
            endAdornment={
              <InputAdornment>
                {" "}
                <SearchIcon />
              </InputAdornment>
            }
            
          />
        </Grid>
        <Grid item xs>
          <FormControl  variant="outlined" className={classes.input_item}>
            <InputLabel>Gender</InputLabel>
            <Select label="Gender">
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"man"}>Man</MenuItem>
              <MenuItem value={"woman"}>Women</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <OutlinedInput
            
            className={classes.input_item}
            placeholder="Nationality"
            
          />
        </Grid>
        <Grid item xs >
          <Button size='small' className={classes.clear_btn}> Clear</Button>
        </Grid>
      </Grid>
	  </Paper>
    </Grid>
  );
};
