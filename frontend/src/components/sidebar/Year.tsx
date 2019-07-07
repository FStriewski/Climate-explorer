import * as React from 'react';
const { useState } = React;

import {InputButton, Input} from '../../styles/Button';

export const Year = (props) => {
const [year, setYear] = useState(0);
const handleSubmit = event => {
  if (event) {
    event.preventDefault();
    props.setQuery({
      type: 'year',
      payload: year
    });
  }
};
const handleInputChange = event => {
  event.persist();
  setYear( event.target.value);
};

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="year"
        onChange={handleInputChange}
        value={year}
        required={true}
      />
      <InputButton type="submit">Select</InputButton>
    </form>
  );};