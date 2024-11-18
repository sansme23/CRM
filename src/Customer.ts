import { useState } from 'react';
import NewCustomerInput from './NewCustomerInput';
import './App.css';

interface FormData {
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

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return 
}

export default App;
