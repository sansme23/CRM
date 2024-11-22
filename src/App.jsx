import React, { useState } from 'react';
import './App.css';

const categories = {
  good: '#00796b', // 
  medium: '#DF8320', // Gul
  poor: 'DF2020', // Rød
};

function App() {
  const [formData, setFormData] = useState({
    fornavn: '',
    efternavn: '',
    region: '',
    telefon: '',
    email: '',
    kategori: 'good',
  });

  const [customers, setCustomers] = useState([]);
  const [view, setView] = useState('home');
  const [filterRegion, setFilterRegion] = useState('');

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCustomers((prevCustomers) => [...prevCustomers, formData]);
    setFormData({
      fornavn: '',
      efternavn: '',
      region: '',
      telefon: '',
      email: '',
      kategori: 'good',
    });
    setView('list');
  };

  const deleteCustomer = (index) => {
    setCustomers((prevCustomers) => prevCustomers.filter((_, i) => i !== index));
  };

  const sortCustomers = () => {
    if (filterRegion) {
      return customers.filter((customer) => customer.region === filterRegion);
    }
    return customers;
  };

  return (
    <div className="App">
      {view === 'home' && (
        <div className="home-page">
          <h1>CRM System</h1>
          <button onClick={() => setView('add')}>Tilføj Kunde</button>
          <button onClick={() => setView('list')}>Kundeliste</button>
        </div>
      )}

      {view === 'add' && (
        <div className="customer-form">
          <h2>Opret Kunde</h2>
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
            <input
              type="text"
              name="telefon"
              placeholder="Telefonnummer"
              value={formData.telefon}
              onChange={onInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Emailadresse"
              value={formData.email}
              onChange={onInputChange}
              required
            />
            <select
              name="region"
              value={formData.region}
              onChange={onInputChange}
              required
            >
              <option value="">Vælg Region</option>
              <option value="Fyn">Fyn</option>
              <option value="Sjælland">Sjælland</option>
              <option value="Jylland">Jylland</option>
            </select>
            <select
              name="kategori"
              value={formData.kategori}
              onChange={onInputChange}
              required
            >
              <option value="good">1</option>
              <option value="medium">2</option>
              <option value="poor">3</option>
            </select>
            <button type="submit">Opret Kunde</button>
          </form>
        </div>
      )}

      {view === 'list' && (
        <div className="customer-list">
          <h2>Kundeliste</h2>
          <div className="filter-controls">
            <label htmlFor="filterRegion">Filtrer efter region:</label>
            <select
              id="filterRegion"
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
            >
              <option value="">Alle regioner</option>
              <option value="Fyn">Fyn</option>
              <option value="Sjælland">Sjælland</option>
              <option value="Jylland">Jylland</option>
            </select>
          </div>
          <ul>
            {sortCustomers().map((customer, index) => (
              <li key={index} className={customer.kategori}>
                <p>
                  {customer.fornavn} {customer.efternavn}
                </p>
                <p>{customer.telefon}</p>
                <p>{customer.email}</p>
                <p>{customer.region}</p>
                <p style={{ color: categories[customer.kategori] }}>
                  {customer.kategori === 'good' ? 'God' : customer.kategori === 'medium' ? 'Medium' : 'Dårlig'}
                </p>
                <button onClick={() => deleteCustomer(index)}>Slet</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setView('home')}>Forside</button>
        </div>
      )}
    </div>
  );
}

export default App;
