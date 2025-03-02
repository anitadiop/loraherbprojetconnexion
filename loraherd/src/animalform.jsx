import React, { useState } from "react";

const AnimalForm = () => {
  const [animal, setAnimal] = useState({
    race: "",
    birthdate: "",
    isCastrated: false,
    nickname: "",
    sex: "M",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnimal({
      ...animal,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Animal enregistré :", animal);
    // Envoyer les données vers un backend ou une API
  };

  return (
    <div>
      <h2>Ajouter un Animal</h2>
      <form onSubmit={handleSubmit}>
        <label>Race :</label>
        <input type="text" name="race" value={animal.race} onChange={handleChange} />

        <label>Date de naissance :</label>
        <input type="date" name="birthdate" value={animal.birthdate} onChange={handleChange} />

        <label>Castré :</label>
        <input type="checkbox" name="isCastrated" checked={animal.isCastrated} onChange={handleChange} />

        <label>Nickname :</label>
        <input type="text" name="nickname" value={animal.nickname} onChange={handleChange} />

        <label>Sexe :</label>
        <select name="sex" value={animal.sex} onChange={handleChange}>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default AnimalForm;
