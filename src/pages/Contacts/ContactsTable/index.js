import { makeStyles } from "@material-ui/core/styles";
import {TableSortLabel,
  Table,
  TableBody,
  Button,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
} from "@material-ui/core";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { CopyToClipboardtext } from "../../../components/CopyToClipboardText";
import {
  NATIONALITY_HUMAN_NAME,
  NATIONALITY_HUMAN_COLOR,
} from "../../../constants";
import store from "../../../store";

const useStyles = makeStyles((theme) => ({
  table: {},
  row: {
    "&>*:not(img)": {
      padding: theme.spacing(1 / 2),
      marginLeft: theme.spacing(1),
    },
  },
  small: {
   
    borderRadius: "50%",
  },
  name: {
    color: "dodgerBlue",
  },
  nat: {textTransform:'none',
  fontSize:11 ,
  minWidth:theme.spacing(10)
  }
}))

export const ContactsTable = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
			<TableCell> <TableSortLabel>Full name</TableSortLabel></TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow hover='true' size="small" key={item.login.uuid} className={classes.row}>
              <TableCell>
                <Avatar
                  className={classes.small}
                  alt=""
                  src={item.picture.thumbnail}
                />
              </TableCell>
              <TableCell>
                <Typography className={classes.name}>
                  {`${item.name.title} ${item.name.first} ${item.name.last}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {format(parseISO(item.dob.date), "MM/dd/yyyy")}{" "}
                </Typography>
                <Typography>{`${item.dob.age} years`}</Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboardtext text={item.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardtext text={item.phone} />
              </TableCell>
              <TableCell>
                <CopyToClipboardtext
                  blackcolor={true}
                  text={`/${item.location.country}/ 
			   ${item.location.street.name} ${item.location.street.number}`}
                />
              </TableCell>
              <TableCell  align="right" >
				<Button style={{wordWrap:"break-word"}}
				variant='outlined'
					 style={{ borderColor:NATIONALITY_HUMAN_COLOR[item.nat], color: NATIONALITY_HUMAN_COLOR[item.nat] }}
                  onClick={() =>
                    (store.filter.nationality =
                      NATIONALITY_HUMAN_NAME[item.nat])
                  }
                  className={classes.nat}
                ><span  className={classes.nat}>
                  {NATIONALITY_HUMAN_NAME[item.nat]}
				  </span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
