//кастом хук , который устанавливает стейт в компонент Contacts
//1. проверяет локал сторадж ,если ничего нет , то устанавливает табличный вид
//2. при изменении вида ,срабатывает useEffect и меняет значение в объекте


import {DATA_VIEW_MODE} from '../../constants/constants'
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