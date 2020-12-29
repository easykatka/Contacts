
import { NATIONALITY_HUMAN_NAME } from "../../constants";
import store from "../../store";
import { useEffect ,useState  } from "react";
import {useDebounce} from "./useDebounce"

export const useFilter = () => { debugger
const {users ,filter , currentPage ,sortType} = store
// фильтр по полу,национальности,имени
const debouncedText = useDebounce(filter.searchText, 500);
const debouncedNationality = useDebounce(filter.nationality,500)

const [result, setResult] = useState([]);


useEffect(() => {
		setResult (users
			.filter((user) => filter.gender === "all" || user.gender === filter.gender)
			.filter((user) => { if ((user.name.first + " " + user.name.last).toLowerCase().includes(debouncedText)) return true;
			  return false;})
			.filter((user) => { if (NATIONALITY_HUMAN_NAME[user.nat].toLowerCase().includes(debouncedNationality)) return true;
			  return false;
		  }))
}, [debouncedText,debouncedNationality,filter.gender])


useEffect(() => {
	setResult(users)
},[users])

const sortFunc  = () =>	  {
	switch (sortType) {
		
			
			case "asc":
			return [...result].sort((a, b) => a.name.first.localeCompare(b.name.first));
			case "desc":
			return [...result].sort((a, b) => b.name.first.localeCompare(a.name.first));
			default : return result
			
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
  // сетить в локал сторадж
  useEffect(() => {
	localStorage.setItem('dataViewMode',store.dataViewMode) 
});
// хендер изменения номера страницы
  const handleChange = (_, value) => {
	store.setCurrentPage(value)
  };

return [currentUsers,pagesCount,handleChange]
}