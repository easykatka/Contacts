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
	  textTransform: "none",
	  color : 'dodgerBlue',
	  whiteSpace: "pre-line",
	  textAlign:'left'
    },
    icon: {
      marginRight: theme.spacing(1),
	},
	black:{
	color:'black'}
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

export const CopyToClipboardtext = ({blackcolor, text }) => {
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
        <Button  className={classes.root} onClick={onClickCopy}>
          <FileCopyOutlinedIcon  className={classes.icon} />
		  <div className={blackcolor ? `${classes.black}` : null}>
          {text}
		  </div>
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClipboardtext.propTypes = {
  text: propsTypes.string.isRequired,
};
