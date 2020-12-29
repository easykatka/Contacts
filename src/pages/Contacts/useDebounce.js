import {useState,useEffect} from 'react'


export const useDebounce = (value, delay)  => { debugger
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(
	  () => {
		const handler = setTimeout(() => {
		  setDebouncedValue(value);
		}, delay);
		return () => {
		  clearTimeout(handler);
		};
	  },
	  [value, delay] 
	)
	return debouncedValue.toLowerCase();}