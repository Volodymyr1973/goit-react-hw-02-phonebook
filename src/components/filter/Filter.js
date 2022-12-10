import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onChangeFilter}></input>
      </label>
    </>
  );
};
