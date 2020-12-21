import { makeAutoObservable } from "mobx";
import {GENDER} from "../constants/gender"

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
