import React from "react";
import { Form } from "react-bootstrap";

function SearchBar({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Form.Group controlId="searchPerfumes">
      <Form.Label>Szukaj:</Form.Label>
      <Form.Control
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Wpisz nazwę lub opis..."
      />
    </Form.Group>
  );
}

export default SearchBar;
