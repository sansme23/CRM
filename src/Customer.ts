import { useState } from 'react';
import NewCustomerInput from './NewCustomerInput';
import './App.css';

interface FormData {
  fornavn: string;
  efternavn: string;
  region: string;
}

interface Customer {
  fornavn: string;
  efternavn: string;
  region: string;
}


function App() {
  const [formData, setFormData] = useState<FormData>({
    fornavn: '',
    efternavn: '',
    region: ''
  });

  const [customers, setCustomers] = useState<Customer[]>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomers((prevCustomers) => [...prevCustomers, formData]);
    setFormData({
      fornavn:'',
      efternavn:'',
      region:''
  });
  };
  
  return 
}

export default App;
