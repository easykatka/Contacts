import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { CopyToClipboardtext } from "../../../components/CopyToClipboardText";
import { NATIONALITY_HUMAN_NAME } from "../../../constants/nationality";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { NATIONALITY_HUMAN_COLOR } from "../../../constants/nationality";
import searchPanelStore from '../../../store/searchPanelStore'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {

	 whiteSpace: "pre-line",
	 padding:theme.spacing(3),
	 height:theme.spacing(45),
	textAlign:"center"


  },
  large: {
    width: theme.spacing(10),
	height: theme.spacing(10),
	textAlign:'center',
	alignItems:'center',
	borderRadius:"50%"
	
  },
}));

export const ContactsCards = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid container>
      {data.map((item) => (
     
	 <Grid item  xs={12} lg={3} sm={6} key={item.login.uuid}>
            <Card    variant="outlined">
              <CardContent className={classes.card} >
				 
                <img
                  alt=""
                  src={item.picture.thumbnail}
                  className={classes.large}
                />
			
                <Typography variant="h5">
                  {`${item.name.title} ${item.name.first} ${item.name.last}`}
                </Typography>
                <Typography>
                  {format(parseISO(item.dob.date), "MM/dd/yyyy")}
                </Typography>
                <Typography>{`${item.dob.age} years`} </Typography>
                <Typography>
                  <CopyToClipboardtext text={item.email} />
                </Typography>
                <CopyToClipboardtext text={item.phone} />
                <Typography>
				<CopyToClipboardtext blackcolor={true} text={`/${item.location.country}/ 
			   ${item.location.street.name} ${item.location.street.number}`} />
                </Typography >
				<Button  onClick={() => searchPanelStore.filter.nationality = NATIONALITY_HUMAN_NAME[item.nat]} style={{backgroundColor:NATIONALITY_HUMAN_COLOR[item.nat]}}>
                {NATIONALITY_HUMAN_NAME[item.nat]}</Button>
              </CardContent>
            </Card>
			</Grid>
     
	  )
	  )}
    </Grid>
  );
};
