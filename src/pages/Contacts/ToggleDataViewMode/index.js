import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { DATA_VIEW_MODE } from "../constants";
import PropTypes from "prop-types";
import { useCallback } from "react";

export const ToggleDataViewMode = ({ dataViewMode, setdataViewMode }) => {
  //body
  const handleChangeViewMode = useCallback(
    (_, nextView) => {
      setdataViewMode(nextView);
    },
    [setdataViewMode]
  );
  //return
  return (
    <ToggleButtonGroup size='small'
      orientation="horizontal"
      value={dataViewMode}
      exclusive
      onChange={handleChangeViewMode}
    >

      <ToggleButton
        value={DATA_VIEW_MODE.TABLE}
        aria-label={DATA_VIEW_MODE.TABLE}
      >
        <ViewModuleIcon />
      </ToggleButton>
	  <ToggleButton
        value={DATA_VIEW_MODE.GRID}
        aria-label={DATA_VIEW_MODE.GRID}
      >
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
//proptypes
ToggleDataViewMode.propTypes = {
  dataViewMode: PropTypes.oneOf([DATA_VIEW_MODE.TABLE, DATA_VIEW_MODE.GRID]),
  setdataViewMode: PropTypes.func.isRequired,
};
