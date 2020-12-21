import { makeAutoObservable } from "mobx";
import {GENDER} from "../constants"

class SearchPanelStore {
  filter = {
  searchText : "",
  gender : GENDER.ALL ,
  nationality : ""}
  constructor() {
    makeAutoObservable(this);
  }
}


export default new SearchPanelStore();
