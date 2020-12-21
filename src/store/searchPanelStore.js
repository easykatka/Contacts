import { makeAutoObservable } from "mobx";
import {GENDER} from "../constants/gender"

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
