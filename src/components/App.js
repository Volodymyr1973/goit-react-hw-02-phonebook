import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
    const doubleContact = this.state.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(this.state.name.toLowerCase());

    if (doubleContact) {
      console.log(doubleContact);
      alert(`${this.state.name} is already in contacts`);
      this.reset();
      return;
    } else
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    this.reset();
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <div>
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
        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              value={this.state.filter}
              onChange={this.changeFilter}
            ></input>
          </label>
          <ul>
            {visibleContacts.length > 0 &&
              visibleContacts.map(contact => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                  <button
                    type="button"
                    onClick={() => this.deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
