import { makeAutoObservable } from "mobx";

class ContactsStore {
  users = [];
  isLoading = true;
  isError = false;
  constructor() {
    makeAutoObservable(this);
  }
  getContacts = async () => {
    try {
      this.isLoading = true;
      const response = await fetch("https://randomuser.me/api/?results=20");
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
}

export default new ContactsStore();
