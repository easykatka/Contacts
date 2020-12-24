import { useStatistic } from "../useStatictic";
import {
  Paper,
  Grid,
  TableHead,
  Typography,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  statistic: {
	padding: theme.spacing(2),
	
  },
  predominate: {
    fontWeight:500,
    backgroundColor: "yellow",
    marginLeft: theme.spacing(18),
  },
  table: { "& > *": { borderBottom: "none" } },
}));

export const Statistic = () => {
  const [
    { males, females, collectionSize, indeterminate, natCollection },
  ] = useStatistic();
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.statistic}>
      <Typography variant="h6">Statistic</Typography>
      <Grid container>
        <Grid item xs={4}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> Collection Size</TableCell>
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
          <Typography noWrap
            display="inline"
            className={classes.predominate}
          >
            {males == females
              ? "Nobody predominate"
              : males > females
              ? "Men predominate"
              : "Women predominate"}
          </Typography>
        </Grid>

        <Grid container>
          <Grid item>
            <Typography>Nationalities</Typography>
          </Grid>
		  <Grid container spacing={1}>
          {Object.keys(natCollection).map((i) => (
            <Grid item xs={6} sm={4} md={3} lg={2} >
              {i} {natCollection[i]}
			  
            </Grid>
          ))}
		  </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
