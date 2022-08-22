import React, { useState } from 'react';
import './App.css';
import { Contact } from './components/Contact';
import { ContactForm } from './components/ContactForm';

function App() {
  // Contact Info
  const [contact, setContact] = useState({
    name: '',
    tel: '',
    email: '',
    website: '',
    location: '',
  });

  const [savedContact, setSavedContact] = useState({});

  const handleContactChange = (e) => {
    setContact((contact) => {
      return { ...contact, [e.target.name]: e.target.value };
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSavedContact({ ...contact });
    setContact({
      name: '',
      tel: '',
      email: '',
      website: '',
      location: '',
    });
  };

  const onContactEdit = (e) => {
    e.preventDefault();
    setContact({
      name: savedContact.name,
      tel: savedContact.tel,
      email: savedContact.email,
      website: savedContact.website,
      location: savedContact.location,
    });
  };

  return (
    <div>
      <ContactForm
        onSubmit={handleContactSubmit}
        handleChange={handleContactChange}
        info={contact}
        onEdit={onContactEdit}
      />
      <Contact info={savedContact} />
    </div>
  );
}

export default App;
