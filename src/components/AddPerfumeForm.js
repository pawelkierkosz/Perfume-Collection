import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddPerfumeForm({ onAddPerfume }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiega przeladowaniu
    if (!name.trim()) return; // Sprawdza czy nazwa nie jest pusta

    const newPerfume = {
      id: Date.now(),
      name,
      description,
      image: image || "https://via.placeholder.com/100?text=New+Perfume",
      rating: parseInt(rating, 10),
    };

    onAddPerfume(newPerfume);

    setName("");
    setDescription("");
    setImage("");
    setRating(3);
  };

  return (
    <div>
      <h2>Dodaj Nowy Perfum</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="perfumeName">
          <Form.Label>Nazwa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Wpisz nazwę perfumu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="perfumeDescription">
          <Form.Label>Opis</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Krótki opis perfumu"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="perfumeImage">
          <Form.Label>URL Obrazu (opcjonalnie)</Form.Label>
          <Form.Control
            type="text"
            placeholder="http://..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="perfumeRating">
          <Form.Label>Ocena</Form.Label>
          <Form.Select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r} ★
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Dodaj Perfum
        </Button>
      </Form>
    </div>
  );
}

export default AddPerfumeForm;
