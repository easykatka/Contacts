import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Avatar,
  Typography,
  CardContent,
  Button,
  Grid,
} from "@material-ui/core";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { CopyToClipboardtext } from "../../../components/CopyToClipboardText";
import {
  NATIONALITY_HUMAN_COLOR,
  NATIONALITY_HUMAN_NAME,
} from "../../../constants";
import store from "../../../store";

const useStyles = makeStyles((theme) => ({
  card: {
    whiteSpace: "pre-line",
    minHeight: theme.spacing(20),
    textAlign: "center",
    marginTop: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "0 auto",
  },
  nat: { textTransform: "none", minWidth: theme.spacing(15) },
}));
export const ContactsCards = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.card} data-testid="contacts-grid-container">
      {data.map((item) => (
        <Grid item xs={12} lg={3} sm={6} key={item.login.uuid}>
          <Card variant="outlined">
            <CardContent>
              <Avatar
                variant="rounded"
                src={item.picture.thumbnail}
                className={classes.avatar}
              ></Avatar>
              <Typography>
                {`${item.name.title} ${item.name.first} ${item.name.last}`}
              </Typography>
              <Button
                className={classes.nat}
                onClick={() =>
                  (store.filter.nationality = NATIONALITY_HUMAN_NAME[item.nat])
                }
                style={{
                  borderColor: NATIONALITY_HUMAN_COLOR[item.nat],
                  color: NATIONALITY_HUMAN_COLOR[item.nat],
                }}
              >
                {NATIONALITY_HUMAN_NAME[item.nat]}
              </Button>
              <Typography>
                {format(parseISO(item.dob.date), "MM/dd/yyyy")}
              </Typography>
              <Typography>{`${item.dob.age} years`}</Typography>
              <Typography>
                <CopyToClipboardtext text={item.email} />{" "}
              </Typography>
              <CopyToClipboardtext text={item.phone} />
              <Typography>
                <CopyToClipboardtext
                  blackcolor={true}
                  text={`/${item.location.country}/ 
			   ${item.location.street.name} ${item.location.street.number}`}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
