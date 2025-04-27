import React from "react";
import PerfumeItem from "./PerfumeItem";

function PerfumeList({ perfumes, onDeletePerfume, onRatingChange }) {
  if (perfumes.length === 0) {
    return <p>Brak perfum do wyświetlenia.</p>;
  }

  return (
    <>
      {perfumes.map((perfume) => (
        <PerfumeItem
          key={perfume.id}
          perfume={perfume}
          onDeletePerfume={onDeletePerfume}
          onRatingChange={onRatingChange}
        />
      ))}
    </>
  );
}

export default PerfumeList;
