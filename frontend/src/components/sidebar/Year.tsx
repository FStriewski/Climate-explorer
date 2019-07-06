import * as React from 'react';
const { useState } = React;

export const Year = (props) => {
const [year, setYear] = useState(0);
const handleSubmit = event => {
  if (event) {
    event.preventDefault();
    props.setQuery(year)
  }
};
const handleInputChange = event => {
  event.persist();
  setYear( event.target.value);
};

  return (
  <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="year"
        onChange={handleInputChange}
        value={year}
        required={true}
      />
    <button type="submit">Send</button>
  </form>
)};