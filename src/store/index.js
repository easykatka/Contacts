import { makeAutoObservable } from "mobx";
import { GENDER, DATA_VIEW_MODE } from "../constants";
const getInitialDataViewMode = () => {
  return localStorage.getItem("dataViewMode") || DATA_VIEW_MODE.TABLE;
};

class Store {
  //users
  users = [];
  isLoading = true;
  isError = false;
  //filter
  filter = {
    searchText: "",
    gender: GENDER.ALL,
    nationality: "",
  };
  //dataviewmode
  dataViewMode = getInitialDataViewMode();
  //currentpage
  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
  }
  getContacts = async () => {
    try {
      this.isLoading = true;
      const response = await fetch("https://randomuser.me/api/?results=400"  );
      const { results, error } = await response.json();
      if (error) {
        throw new Error();
      }
      this.users = results;
      this.isError = false;
    } catch (e) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  };
  setDataViewMode(data) {
    debugger;
    this.filter.dataViewMode = data;
  }
}

export default new Store();
