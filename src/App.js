import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PerfumeList from "./components/PerfumeList";
import AddPerfumeForm from "./components/AddPerfumeForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [perfumes, setPerfumes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    // Wczytanie danych z pliku JSON
    fetch("/perfumes.json")
      .then((response) => response.json())
      .then((data) => setPerfumes(data))
      .catch((err) => console.error("Błąd wczytywania perfum:", err));
  }, []);

  // Dodanie nowego perfumu
  const handleAddPerfume = (newPerfume) => {
    setPerfumes((prev) => [...prev, newPerfume]);
  };

  // Usaniecie wybranego po id perfumu
  const handleDeletePerfume = (id) => {
    setPerfumes((prev) => prev.filter((p) => p.id !== id));
  };

  // Zmiana oceny danego perfumu
  const handleRatingChange = (id, newRating) => {
    setPerfumes((prev) =>
      prev.map((p) => (p.id === id ? { ...p, rating: newRating } : p))
    );
  };

  // Filtrowanie
  const filteredPerfumes = perfumes.filter((p) => {
    const combinedText = (p.name + p.description).toLowerCase();
    return combinedText.includes(searchQuery.toLowerCase());
  });

  // Sortowanie (juz po filtracji)
  const sortedPerfumes = [...filteredPerfumes].sort((a, b) => {
    let fieldA = a[sortField];
    let fieldB = b[sortField];

    // Porównywanie stringów bez wielkości liter
    if (typeof fieldA === "string" && typeof fieldB === "string") {
      fieldA = fieldA.toLowerCase();
      fieldB = fieldB.toLowerCase();
    }

    if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Zmiana stanu sortField
  const handleSortFieldChange = (e) => {
    setSortField(e.target.value);
  };

  // Zmiana stanu sortOrder
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1>Kolekcja Perfum</h1>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6} sm={4} md={3}>
          <Form.Label>Sortuj według:</Form.Label>
          <Form.Select value={sortField} onChange={handleSortFieldChange}>
            <option value="name">Nazwa</option>
            <option value="description">Opis</option>
            <option value="rating">Ocena</option>
          </Form.Select>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <Form.Label>Kolejność:</Form.Label>
          <Form.Select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Rosnąco</option>
            <option value="desc">Malejąco</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <PerfumeList
            perfumes={sortedPerfumes}
            onDeletePerfume={handleDeletePerfume}
            onRatingChange={handleRatingChange}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddPerfumeForm onAddPerfume={handleAddPerfume} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
