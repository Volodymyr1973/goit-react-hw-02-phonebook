import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // addContacts = ({ id, name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   this.setState(({ contacts }) => ({
  //     contacts: [contact],
  //   }));
  // };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  // handleChange = event => {
  //   console.log(event.currentTarget);
  //   console.dir(event);
  //   console.dir(event.currentTarget);
  //   console.log(event.currentTarget.value);

  //   const { name, value } = event.currentTarget;

  //   this.setState({ [name]: value });
  // };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    const userContact = event.currentTarget.name.value;
    const contact = {
      id: nanoid(),
      name: userContact,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  // this.props.onSubmit(this.state);

  // reset = () => {
  //   this.setState({ name: ' ', number: ' ' });
  // };

  // addContact() {}

  render() {
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
          <ul>
            {this.state.contacts.map(contact => (
              <li id={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
