import { useState } from 'react';
import NewCustomerInput from './NewCustomerInput';
import './App.css';

function App() {
  // Initialiserer formData
  const [formData, setFormData] = useState({
    fornavn: '',
    efternavn: '',
    region: ''
  });

  // Tilføjer en state for kunderne
  const [customers, setCustomers] = useState([]);

  // Håndterer inputændringer
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Håndterer formularindsendelse
  const onSubmit = (e) => {
    e.preventDefault();
    // Tilføjer den nye kunde til listen
    setCustomers([...customers, formData]);
    // Nulstiller formularen
    setFormData({
      fornavn: '',
      efternavn: '',
      region: ''
    });
  };

  return (
    <>
      <h1>CRM-system</h1>
      <div className="form-container">
        <NewCustomerInput 
          formData={formData} 
          onInputChange={onInputChange} 
          onSubmit={onSubmit}
        />
        {/* Vis listen af kunder til højre */}
        <div className="customer-list">
          <h2>kundeliste</h2>
          <ul>
            {customers.map((customer, index) => (
              <li key={index}>
                {customer.fornavn} {customer.efternavn} - {customer.region}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
