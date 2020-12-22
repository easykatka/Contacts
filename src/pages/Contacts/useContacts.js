
import { NATIONALITY_HUMAN_NAME } from "../../constants";
import store from "../../store";
import { useEffect } from "react";

export const useFilter = () => {

const {users ,filter , currentPage} = store
// фильтр по полу,национальности,имени
const filteredUsers = users
  .filter((user) => filter.gender === "all" || user.gender === filter.gender)
  .filter((user) => { if ((user.name.first + " " + user.name.last).toLowerCase().includes(filter.searchText.toLowerCase())) return true;
	return false;})
  .filter((user) => { if (NATIONALITY_HUMAN_NAME[user.nat].toLowerCase().includes(filter.nationality.toLowerCase())) return true;
	return false;
})
// фильтр по страницам
const pageSize = 8;
const pagesCount = Math.ceil(filteredUsers.length/pageSize)
const indexOfLastPage = currentPage * pageSize
const indexOfFistPage = indexOfLastPage - pageSize
const currentUsers = filteredUsers.slice(indexOfFistPage,indexOfLastPage)
//сброс на первую страницу,если изменился фильтр
useEffect(()=> {
	store.currentPage = 1
},[filter.searchText,filter.gender,filter.nationality])
// фетч при первом рендере
useEffect(() => {
	store.getContacts();
  }, []);
// хендер изменения номера страницы
  const handleChange = (_, value) => {
	store.currentPage = value;
  };

return [currentUsers,pagesCount,handleChange]
}