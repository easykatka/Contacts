
import { NATIONALITY_HUMAN_NAME } from "../../constants";
import store from "../../store";
import { useEffect } from "react";

export const useFilter = () => {
const {users ,filter , currentPage ,sortType} = store
// фильтр по полу,национальности,имени
const filteredUsers = users
  .filter((user) => filter.gender === "all" || user.gender === filter.gender)
  .filter((user) => { if ((user.name.first + " " + user.name.last).toLowerCase().includes(filter.searchText.toLowerCase())) return true;
	return false;})
  .filter((user) => { if (NATIONALITY_HUMAN_NAME[user.nat].toLowerCase().includes(filter.nationality.toLowerCase())) return true;
	return false;
})
const sortFunc  = () =>	  {
	switch (sortType) {
		case "default":
			return filteredUsers;
			case "asc":
			return [...filteredUsers].sort((a, b) => a.name.first.localeCompare(b.name.first));
			case "desc":
			return [...filteredUsers].sort((a, b) => b.name.first.localeCompare(a.name.first));
			
	}}
	const sortedUsers = sortFunc()

// фильтр по страницам
const pageSize = 8;
const pagesCount = Math.ceil(sortedUsers.length/pageSize)
const indexOfLastPage = currentPage * pageSize
const indexOfFistPage = indexOfLastPage - pageSize
const currentUsers = sortedUsers.slice(indexOfFistPage,indexOfLastPage)
//сброс на первую страницу,если изменился фильтр
useEffect(()=> {
	store.setCurrentPage(1)
},[filter.searchText,filter.gender,filter.nationality])
// фетч при первом рендере
useEffect(() => {
	store.getContacts();
  }, []);
// хендер изменения номера страницы
  const handleChange = (_, value) => {
	store.setCurrentPage(value)
  };

return [currentUsers,pagesCount,handleChange]
}