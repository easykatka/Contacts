import { NATIONALITY_HUMAN_NAME } from "../../constants";
import store from "../../store";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useFilter = () => {
  const { users, filter, currentPage, orderBy, } = store;
  // debounce
  const debouncedText = useDebounce(filter.searchText, 500);
  const debouncedNationality = useDebounce(filter.nationality, 500);
  //отфильтрованный результат
  const [result, setResult] = useState([]);

  // функция фильтра
  useEffect(() => {
    setResult(
      users
        .filter(
          (user) => filter.gender === "all" || user.gender === filter.gender
        )
        .filter((user) => {
          if (
            (user.name.first + " " + user.name.last)
              .toLowerCase()
              .includes(debouncedText)
          )
            return true;
          return false;
        })
        .filter((user) => {
          if (
            NATIONALITY_HUMAN_NAME[user.nat]
              .toLowerCase()
              .includes(debouncedNationality)
          )
            return true;
          return false;
        })
    );
  }, [debouncedText, debouncedNationality, filter.gender , users]);
  //
  useEffect(() => {
    setResult(users);
  }, [users]);


  const sortFunc = () => {
    switch (orderBy.order) {
      case "asc":
        return [...result].sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
      case "desc":
        return [...result].sort((a, b) =>
          b.name.first.localeCompare(a.name.first)
        );
      default:
        return result;
    }
  };
  const orderHandler = () => {
	  orderBy.order==="" ? store.setOrderBy("asc" , false):
	  orderBy.order==="asc" ? store.setOrderBy('desc' , false): store.setOrderBy('' , true)
		
	  }

  const sortedUsers = sortFunc();

  // фильтр по страницам
  const pageSize = 8;
  const pagesCount = Math.ceil(sortedUsers.length / pageSize);
  const indexOfLastPage = currentPage * pageSize;
  const indexOfFistPage = indexOfLastPage - pageSize;
  const currentUsers = sortedUsers.slice(indexOfFistPage, indexOfLastPage);
  //сброс на первую страницу,если изменился фильтр
  useEffect(() => {
    store.setCurrentPage(1);
  }, [result]);
  // фетч при первом рендере
  useEffect(() => {
    store.getContacts();
  }, []);
  // сетить в локал сторадж
  useEffect(() => {
    localStorage.setItem("dataViewMode", store.dataViewMode);
  });
  // хендлер изменения номера страницы
  const handleChange = (_, value) => {
    store.setCurrentPage(value);
  };

  return [currentUsers, pagesCount, handleChange, orderHandler];
};
