import { useEffect, useRef, useState } from 'react';

import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import Section from './UI/Section';

const LS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const lsContacts = localStorage.getItem(LS_KEY);

    if (lsContacts) {
      setContacts(JSON.parse(lsContacts));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contact => {
    const isExisting = contacts.find(({ name }) => name === contact.name);
    if (isExisting) {
      return alert(contact.name + ' is already in contacts!');
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
    setFilter('');
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(c => c.id !== id));
  };

  const filterContacts = () => {
    const lowFilter = filter.toLowerCase();
    return contacts.filter(c => c.name.toLowerCase().includes(lowFilter));
  };

  const filteredContacts = filterContacts();

  return (
    <>
      <Section title="Phonebook">
        <ContactsForm onAddContact={handleAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} onFilterChange={setFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </>
  );
};

export default App;
