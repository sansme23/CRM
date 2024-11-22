import React from 'react';

const NewCustomerInput = ({ formData, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="fornavn"
        value={formData.fornavn}
        onChange={onInputChange}
        placeholder="Fornavn"
        required
      />
      <input
        type="text"
        name="efternavn"
        value={formData.efternavn}
        onChange={onInputChange}
        placeholder="Efternavn"
        required
      />
      <input
        type="text"
        name="region"
        value={formData.region}
        onChange={onInputChange}
        placeholder="Region"
        required
      />
      <input
        type="tel"
        name="telefon"
        value={formData.telefon}
        onChange={onInputChange}
        placeholder="Telefonnummer"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        placeholder="Email"
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={onInputChange}
        required
      >
        <option value="grøn">Grøn</option>
        <option value="gul">Gul</option>
        <option value="rød">Rød</option>
      </select>
      <textarea
        name="note"
        value={formData.note}
        onChange={onInputChange}
        placeholder="Note"
      />
      <button type="submit">Tilføj kunde</button>
    </form>
  );
};

export default NewCustomerInput;
