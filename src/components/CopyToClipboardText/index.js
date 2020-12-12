import { createStyles, makeStyles } from "@material-ui/core/styles";
import propsTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useCopyToClipboard } from "react-use";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

export const CopyToClipboardtext = ({ text }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const classes = useStyles();
  return (
    <Tooltip title="copy" arrow placement="top">
      <Button className={classes.root} onClick={() => copyToClipboard(text) }>
        <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
        {text}
      </Button >
    </Tooltip>
  );
};
CopyToClipboardtext.propTypes = {
  text: propsTypes.string.isRequired,
};
