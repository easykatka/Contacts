// TODO searchpanel
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400,
		border : 'solid 1px'
	  },
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export const SearchPanel = () => {
  const classes = useStyles();

  return (
	<Paper component="form" className={classes.root}>
       <Input
        className={classes.input}
        placeholder="Search by full name"
        inputProps={{ 'aria-label': 'search by full name' }}
      />
	  <SearchIcon />
        
    
    </Paper>
  );
};


// <MenuItem
// id="outlined-basic"
// size="small"
// label="Gender"
// variant="outlined"
// />
// <TextField
// id="outlined-basic"
// size="small"
// label="Outlined"
// variant="outlined"
// />