import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const initialAnimals = [
  { id: 1, race: "Berger Allemand", age: 3, sex: "Mâle", dateNaissance: "2021-05-10", status: "Disponible", position: [14.6928, -17.4467] },
  { id: 2, race: "Siamois", age: 2, sex: "Femelle", dateNaissance: "2022-08-15", status: "Adopté", position: [14.7167, -17.4677] }
];

export default function LocalisationAnimaux() {
  const [animals, setAnimals] = useState(initialAnimals);
  const [newAnimal, setNewAnimal] = useState({
    id: "", race: "", age: "", sex: "", dateNaissance: "", status: "", position: [14.7000, -17.4500]
  });

  const handleChange = (e) => {
    setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
  };

  const handleAddAnimal = () => {
    if (newAnimal.id && newAnimal.race) {
      setAnimals([...animals, { ...newAnimal, id: parseInt(newAnimal.id), age: parseInt(newAnimal.age) }]);
      setNewAnimal({ id: "", race: "", age: "", sex: "", dateNaissance: "", status: "", position: [14.7000, -17.4500] });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2870BD" }}>📍 Localisation des Animaux</h1>

      {/* Carte Leaflet */}
      <MapContainer center={[14.6928, -17.4467]} zoom={12} style={{ height: "400px", width: "100%", marginBottom: "20px", borderRadius: "10px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {animals.map(animal => (
          <Marker key={animal.id} position={animal.position}>
            <Popup>
              <strong>{animal.race}</strong> <br />
              Âge: {animal.age} ans <br />
              Statut: {animal.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Formulaire d'ajout */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input type="number" name="id" placeholder="ID" value={newAnimal.id} onChange={handleChange} style={inputStyle} />
        <input type="text" name="race" placeholder="Race" value={newAnimal.race} onChange={handleChange} style={inputStyle} />
        <input type="number" name="age" placeholder="Âge" value={newAnimal.age} onChange={handleChange} style={inputStyle} />
        <select name="sex" value={newAnimal.sex} onChange={handleChange} style={inputStyle}>
          <option value="">Sexe</option>
          <option value="Mâle">Mâle</option>
          <option value="Femelle">Femelle</option>
        </select>
        <input type="date" name="dateNaissance" value={newAnimal.dateNaissance} onChange={handleChange} style={inputStyle} />
        <select name="status" value={newAnimal.status} onChange={handleChange} style={inputStyle}>
          <option value="">Statut</option>
          <option value="Disponible">Disponible</option>
          <option value="Adopté">Adopté</option>
          <option value="Perdu">Perdu</option>
        </select>
        <button onClick={handleAddAnimal} style={buttonStyle}>Ajouter Animal</button>
      </div>

      {/* Tableau des animaux */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#2870BD", color: "white", textAlign: "left" }}>
            <th style={thStyle}>ID</th>
            <th>Race</th>
            <th>Âge</th>
            <th>Sexe</th>
            <th>Date de Naissance</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {animals.map(animal => (
            <tr key={animal.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{animal.id}</td>
              <td>{animal.race}</td>
              <td>{animal.age} ans</td>
              <td>{animal.sex}</td>
              <td>{animal.dateNaissance}</td>
              <td>{animal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const inputStyle = { padding: "10px", border: "1px solid #ddd", borderRadius: "5px" };
const buttonStyle = { padding: "10px 15px", background: "#2870BD", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };
const thStyle = { padding: "10px" };
const tdStyle = { padding: "10px" };
