import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { DATA_VIEW_MODE } from "../../../constants";
import { useEffect } from "react";
import store from '../../../store'
import { observer } from "mobx-react-lite";

export const ToggleDataViewMode = observer( () => {
	
  //body
  useEffect(() => {
	localStorage.setItem('dataViewMode',store.dataViewMode) 
}, [store.dataViewMode]);

  return (
    <ToggleButtonGroup size='small'
      orientation="horizontal"
	  value={store.dataViewMode}
	  exclusive
      onChange={  (_, nextView) => {if (nextView) 
		store.dataViewMode = nextView}}
    >
			  <ToggleButton
        value={DATA_VIEW_MODE.TABLE}
		aria-label={DATA_VIEW_MODE.TABLE}
      >
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton
		value={DATA_VIEW_MODE.GRID}
        aria-label={DATA_VIEW_MODE.GRID}
      >
        <ViewModuleIcon />
      </ToggleButton>

    </ToggleButtonGroup>
  );
}
)
