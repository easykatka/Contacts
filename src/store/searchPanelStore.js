import { makeAutoObservable } from "mobx";

class SearchPanelStore {
  filter = {
  searchText : "",
  gender : "all",
  nationality : ""}
  constructor() {
    makeAutoObservable(this);
  }
}


export default new SearchPanelStore();
