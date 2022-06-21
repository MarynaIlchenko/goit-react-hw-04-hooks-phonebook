// import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import { InputForm } from './InputForm';
// import contactDefault from './DataDefault/Data.json';
import { ContactList } from './ContactList';
import * as localStorage from './utils/localStorage';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

// const CONTACTS_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.read('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const onAddContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const contactsArray = contacts;
    const isFindContact = contactsArray.find(contact => contact.name === name);
    if (isFindContact) {
      alert(`${name} is ready in contacts`);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  // setContacts(prevState => {
  //   return [...prevState, contact];
  // });

  const onDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    localStorage.save('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
        contacts={getAddedContacts}
        deleteCont={onDeleteContact}
        // contactsArr={this.getAddedContacts()}
        // deleteContact={this.onDeleteContact}
      />
    </div>
  );
}
