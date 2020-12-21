import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { CopyToClipboardtext } from "../../../components/CopyToClipboardText";
import { NATIONALITY_HUMAN_NAME } from "../../../constants/nationality";

const useStyles = makeStyles((theme) => ({
  table: {},
  row: { "& *:not(img)" : {padding: "2px"  } },
  small: {
    width: theme.spacing(5),
	height: theme.spacing(5),
	borderRadius:"50%"
  },
  name : {
	color: 'dodgerBlue'
  }
}))

export const ContactsTable = ({ data }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.login.uuid} className={classes.row}>
              <TableCell>
                <img className={classes.small} alt="" src={item.picture.thumbnail} />
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
                <Typography
				>{`${item.dob.age} years`}
				 </Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboardtext text={item.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardtext text={item.phone} />
              </TableCell>
              <TableCell>
			  <CopyToClipboardtext blackcolor={true} text={`/${item.location.country}/ 
			   ${item.location.street.name} ${item.location.street.number}`} />
              </TableCell>
              <TableCell align="right">
                <Typography>{NATIONALITY_HUMAN_NAME[item.nat]}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
