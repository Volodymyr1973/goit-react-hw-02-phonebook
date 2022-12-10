import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    const userContact = event.currentTarget.name.value;
    const userNumber = event.currentTarget.number.value;
    const contact = {
      id: nanoid(),
      name: userContact,
      number: userNumber,
    };
    const doubleContact = this.props.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(this.state.name.toLowerCase());

    if (doubleContact) {
      alert(`${this.state.name} is already in contacts`);
      this.reset();
      return;
    } else this.props.addContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleNumberChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
