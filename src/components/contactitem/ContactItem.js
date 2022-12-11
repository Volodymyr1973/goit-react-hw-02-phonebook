import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ contacts, filter, onDeleteContact }) => {
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <li className={css.contact__item} key={contact.id}>
            <span className={css.contact__name}>{contact.name}:</span>
            <span className={css.contact__number}>{contact.number}</span>

            <button
              className={css.contact__button}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </>
  );
};
