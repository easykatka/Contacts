import { useState, useEffect } from "react";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=200")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return <div>Contacts</div>;
};
