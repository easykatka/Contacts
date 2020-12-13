import {DATA_VIEW_MODE} from './constants'
import { useState ,useEffect } from "react";

const getInitialDataViewMode = () => {
	return localStorage.getItem('dataViewMode') || DATA_VIEW_MODE.TABLE
}
export const useDataViewMode = () => {
	const [dataViewMode, setdataViewMode] = useState(getInitialDataViewMode);
	useEffect(() => {
		localStorage.setItem('dataViewMode',dataViewMode)
	}, [dataViewMode, setdataViewMode]);
	return [dataViewMode, setdataViewMode]
}