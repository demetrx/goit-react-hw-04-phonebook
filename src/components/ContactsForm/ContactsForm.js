import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Input } from './ContactsForm.styled';

const ContactsForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFieldChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error(name + 'field is not supported!');
    }
  };

  const handleAddContant = e => {
    e.preventDefault();

    onAddContact({ name, number, id: nanoid() });

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleAddContant}>
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleFieldChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="number">Number</label>
      <Input
        type="tel"
        name="number"
        id="number"
        value={number}
        onChange={handleFieldChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add Contact</button>
    </Form>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
