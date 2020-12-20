import { createStyles, makeStyles } from "@material-ui/core/styles";
import propsTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useCopyToClipboard } from "react-use";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useCallback, useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
	  cursor: "pointer",
	  textTransform:'lowercase',
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);
const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};
const TITLE_BY_STATUS = {
	[STATUS_COPY.COPY] : 'Copy',
	[STATUS_COPY.COPIED]: 'Copied'
}

export const CopyToClipboardtext = ({ text }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const classes = useStyles();
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard ,text]);
  
  const onClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={TITLE_BY_STATUS[statusCopy]} arrow placement="top">
        <Button className={classes.root} onClick={onClickCopy}>
          <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};
CopyToClipboardtext.propTypes = {
  text: propsTypes.string.isRequired,
};
