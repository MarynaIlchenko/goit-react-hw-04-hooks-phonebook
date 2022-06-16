// import { render } from '@testing-library/react';
import {useState, useEffect} from 'react';
import {InputForm} from './InputForm/InputForm';
// import contactDefault from './DataDefault/Data.json';
import {ContactList} from './components/ContactList';
import {Filter} from './Filter/Filter';

const CONTACTS_KEY = 'contacts';

export const App =()=> {
  const [contacts, setContacts] = useState(localStorage.read(CONTACTS_KEY));
  const [filter, setFilter] = useState('');

    useEffect(() => {
    localStorage.save(CONTACTS_KEY, contacts);
    }, [contacts]);
  
  // componentDidMount() {
  //   console.log('App componentDidMount');
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('ComponentDidUpdate');

  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('Обновилось поле contacts');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
    // console.log(prevState);
    // console.log(this.state);
  }

  const onAddContact = contact => {
    if (contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is ready in contacts`);
      return;
    }

    setContacts(prevState => ({
      return [...prevState, contact],
    }));
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getAddedContacts = () => {
    // const { filter, contacts } = this.state;
    const toLowerCaseFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };

  // render() {
  //   console.log('App render');
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
          contacts={getAddedContacts()}
          deleteCont={onDeleteContact}
          // contactsArr={this.getAddedContacts()}
          // deleteContact={this.onDeleteContact}
        />
      </div>
    );
  };
