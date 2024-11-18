function NewCustomerInput({ formData, onInputChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="fornavn"
          placeholder="Fornavn"
          value={formData.fornavn}
          onChange={onInputChange}
          required
        />
        <input
          type="text"
          name="efternavn"
          placeholder="Efternavn"
          value={formData.efternavn}
          onChange={onInputChange}
          required
        />
        <select
          name="region"
          value={formData.region}
          onChange={onInputChange}
          required
        >
          <option value="" disabled hidden>
            Region
          </option>
          <option value="Fyn">Fyn</option>
          <option value="Jylland">Jylland</option>
          <option value="Sjælland">Sjælland</option>
        </select>
        <button type="submit">Tilføj</button>
      </form>
    </div>
  );
}

export default NewCustomerInput;
