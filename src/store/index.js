import { runInAction, makeAutoObservable } from "mobx";
import { GENDER, DATA_VIEW_MODE } from "../constants";
class Store {
  users = [];
  isLoading = true;
  isError = false;
  //фильтры
  filter = {
    searchText: "",
    gender: GENDER.ALL,
    nationality: "",
  };
  //датавью
  dataViewMode = localStorage.getItem("dataViewMode") || DATA_VIEW_MODE.TABLE;
  currentPage = 1;
  //сортировка по имени
  orderBy = {
    order: "",
    hideSortIcon: false,
  };
  constructor() {
    makeAutoObservable(this);
  }
  getContacts = async () => {
    try {
      this.isLoading = true;
      const response = await fetch("https://randomuser.me/api/?results=50");
      const { results, error } = await response.json();
      if (error) {
        throw new Error(error);
      }
      runInAction(() => {
        this.users = results;
        this.isError = false;
      });
    } catch (e) {
      runInAction(() => (this.isError = true));
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  setCurrentPage(page) {
    this.currentPage = page;
  }
  setSearchText(text) {
    this.filter.searchText = text;
  }
  setOrderBy(order, hideSortIcon) {
    this.orderBy.order = order;
    this.orderBy.hideSortIcon = hideSortIcon;
  }
  setGender(gender) {
    this.filter.gender = gender;
  }
  setNat(nat) {
    this.filter.nationality = nat;
  }
  setViewMode(mode) {
    this.dataViewMode = mode;
  }
}
export default new Store();
