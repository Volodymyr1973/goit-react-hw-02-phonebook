import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { ContactForm } from './contactform/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactlist/ContactList';
import { ContactItem } from './contactitem/ContactItem';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />

        <div>
          <h2>Contacts</h2>
          <Filter
            filter={this.state.filter}
            onChangeFilter={this.changeFilter}
          />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onDeleteContact={this.deleteContact}
          >
            <ContactItem />
          </ContactList>
        </div>
      </div>
    );
  }
}
