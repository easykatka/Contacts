import { useStatistic } from "../useStatictic";
import {Paper,Grid,TableHead,Typography,TableRow,TableCell,TableBody,Table} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
	padding: theme.spacing(3),
  },
  predominate: {
    fontWeight: 500,
    backgroundColor: "yellow",
    marginLeft: theme.spacing(19),
  },
  grey:{"&>*": {color: "grey" ,borderBottom:'none',  }},
  natCollection:{
	justifyContent:'center',
	"& >*": {whiteSpace: "pre" , "&>*":{justifyContent:'center'} }
  }
}));
export const Statistic = () => {
  const [
    { males, females, collectionSize, indeterminate, natCollection },
  ] = useStatistic();
  const classes = useStyles();

  return (
    <Paper variant="outlined" data-testid='statictic-container' className={classes.paper}>
      <Typography variant="h6">Statistic</Typography>
      <Grid container>
        <Grid item xs={5}>
          <Table >
            <TableHead >
              <TableRow className={classes.grey}>
                <TableCell > Collection Size</TableCell>
                <TableCell> Male</TableCell>
                <TableCell> Females</TableCell>
                <TableCell> Indeterminate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell> {collectionSize}</TableCell>
                <TableCell> {males}</TableCell>
                <TableCell> {females}</TableCell>
                <TableCell> {indeterminate}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography noWrap display="inline" className={classes.predominate}>
            {males === females
              ? null
              : males > females
              ? "Men predominate"
              : "Women predominate"}
          </Typography>
        </Grid>
        <Grid container className={classes.natCollection}>
          <Grid>
            <Typography  style={{color : 'grey'}} >Nationalities</Typography>
          </Grid>
          <Grid container>
            {Object.keys(natCollection).sort().map((i) => (
              <Grid  key={i} item xs={12} sm={6} md={4} lg={3}>
                <span style={{	fontWeight:800}}>{i}</span>
                <span>
					{natCollection[i] === 1 ?
					  `  ${natCollection[i]} contact` 
					 :
					  `  ${natCollection[i]} contacts` }	
					</span>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
