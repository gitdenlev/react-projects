import "./PhoneBook.scss";
import { useState } from "react";

const PhoneBook = () => {
  const contactsList = [
    {
      id: 1,
      name: "Denys",
      number: 38081234567,
    },
    {
      id: 2,
      name: "Alex",
      number: 23242354556,
    },
  ];

  const [contacts, setContacts] = useState(contactsList);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserNumber = (e) => {
    setUserNumber(e.target.value);
  };

  const handlerAddContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: contacts.length + 1,
      name: userName,
      number: userNumber,
    };
    setContacts([...contacts, newContact]);
    setUserName("");
    setUserNumber("");
  };

  const handlerDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handlerFindContact = (userName) => {
    contacts.find((contact) => contact.name === userName);
  }

  return (
    <>
      <div className="container">
        <div className="phonebook__container">
          <h1>Phonebook</h1>
          <form onSubmit={handlerAddContact}>
            <label>Name</label>
            <br />
            <input
              required
              type="text"
              value={userName}
              onChange={handleUserName}
            />
            <br />
            <label>Number</label>
            <br />
            <input
              required
              type="text"
              value={userNumber}
              onChange={handleUserNumber}
            />
            <br />
            <button type="submit" className="btn__add-contact">
              Add contact
            </button>
          </form>
        </div>
        <hr />
        <div className="contacts__container">
          <h1>Contacts</h1>
          <h2>Find contacts by name</h2>
          <input onChange={handlerFindContact} type="text" />
          <ul className="contacts__list">
            {contacts.map((contact) => (
              <li key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                <button onClick={() => handlerDeleteContact(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PhoneBook;
