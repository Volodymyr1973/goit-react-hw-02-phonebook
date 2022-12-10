import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ contacts, filter, onDeleteContact }) => {
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
    </>
  );
};
