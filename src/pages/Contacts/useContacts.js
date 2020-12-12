import { useState, useEffect } from "react";

export const useContacts = () => {
	const [data, setData] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const [isError, setisError] = useState(false);
  
	useEffect(() => {
	  const getContacts = async () => {
		try {
		  setisLoading(true);
		  const response = await fetch("https://randomuser.me/api/?results=200");
		  const { results, error } = await response.json();
		  if (error) {
			throw new Error();
		  }
		  setData(results);
		  setisError(false);
		} catch (e) {
		  setisError(true);
		} finally {
		  setisLoading(false);
		}
	  };
	  getContacts();
	}, []);
	return {
	  data,
	  isLoading,
	  isError,
	};
  };