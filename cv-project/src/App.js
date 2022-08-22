import React, { useState } from 'react';
import './App.css';
import uniqid from 'uniqid';
import { Contact } from './components/Contact';
import { ContactForm } from './components/ContactForm';
import { Profile } from './components/Profile';
import { ProfileForm } from './components/ProfileForm';
import { WorkForm } from './components/WorkForm';
import { Work } from './components/Work';

function App() {
  // Contact Info
  const [contact, setContact] = useState({
    name: '',
    tel: '',
    email: '',
    website: '',
    location: '',
  });

  // Contact info
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

  // Profile
  const [profile, setProfile] = useState('');
  const [savedProfile, setSavedProfile] = useState('');

  const onProfileChange = (e) => {
    setProfile(e.target.value);
  };

  const onProfileSubmit = (e) => {
    e.preventDefault();
    if (profile) {
      setSavedProfile(profile);
      setProfile('');
    }
  };

  const onProfileEdit = (e) => {
    e.preventDefault();
    setProfile(savedProfile);
  };

  // Work History
  const [work, setWork] = useState({
    company: '',
    position: '',
    from: '',
    to: '',
    description: '',
    id: uniqid(),
  });

  const [workHistory, setWorkHistory] = useState([]);

  const handleWorkChange = (e) => {
    setWork((work) => {
      return { ...work, [e.target.name]: e.target.value };
    });
    console.log(work);
  };

  const onWorkSubmit = (e) => {
    e.preventDefault();
    setWorkHistory(workHistory.concat(work));
    setWork({
      company: '',
      position: '',
      from: '',
      to: '',
      description: '',
      id: uniqid(),
    });
    console.log(workHistory);
  };

  const onWorkEdit = (e) => {
    e.preventDefault();
    const last = workHistory[workHistory.length - 1];
    console.log(last);
    setWork({
      company: last.company,
      position: last.position,
      from: last.from,
      to: last.to,
      description: last.description,
      id: last.id,
    });
  };

  return (
    <div className="wrapper">
      <div className="left">
        <ContactForm
          onSubmit={handleContactSubmit}
          handleChange={handleContactChange}
          info={contact}
          onEdit={onContactEdit}
        />
        <ProfileForm
          text={profile}
          onChange={onProfileChange}
          onSubmit={onProfileSubmit}
          onEdit={onProfileEdit}
        />
        <WorkForm
          info={work}
          handleChange={handleWorkChange}
          onSubmit={onWorkSubmit}
          onEdit={onWorkEdit}
        />
      </div>
      <div className="right">
        <Contact info={savedContact} />
        <Profile text={savedProfile} />
        <Work history={workHistory} />
      </div>
    </div>
  );
}

export default App;
