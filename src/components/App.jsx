// import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import { InputForm } from './InputForm';
// import contactDefault from './DataDefault/Data.json';
import { ContactList } from './ContactList';
import * as localStorage from './utils/localStorage';
import { Filter } from './Filter';
const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(localStorage.read(CONTACTS_KEY));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.save(CONTACTS_KEY, contacts);
  }, [contacts]);

  const onAddContact = contact => {
    if (contacts.some(item => item.name === contacts.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    console.log(onAddContact);

    setContacts(prevState => {
      return [...prevState, contact];
    });
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getAddedContacts = () => {
    const toLowerCaseFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        padding: '50px',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <InputForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contactsArr={getAddedContacts}
        deleteContact={onDeleteContact}
      />
    </div>
  );
};
