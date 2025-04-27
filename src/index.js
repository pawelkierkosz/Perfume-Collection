import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import potrzebnych bibliotek uruchamiajacych ReactDOM.createRoot()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // Renderowanie komponentu App co uruchamia cala aplikacje
