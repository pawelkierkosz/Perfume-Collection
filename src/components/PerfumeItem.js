import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function PerfumeItem({ perfume, onDeletePerfume, onRatingChange }) {
  const { id, name, description, image, rating } = perfume;

  // Wywolanie funkcji z App
  const handleDelete = () => {
    onDeletePerfume(id);
  };

  // Wywolanie funkcji z App 
  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    onRatingChange(id, newRating);
  };

  return (
    <Card className="mb-3">
      <Card.Body className="d-flex">
        <div className="me-3">
          <Card.Img
            src={image}
            alt={name}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="flex-grow-1">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Form.Group className="d-inline-block me-3">
            <Form.Label className="fw-bold">Ocena:</Form.Label>
            <Form.Select
              value={rating}
              onChange={handleRatingChange}
              className="ms-2 d-inline-block w-auto"
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r} ★
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="danger" onClick={handleDelete}>
            Usuń
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PerfumeItem;
