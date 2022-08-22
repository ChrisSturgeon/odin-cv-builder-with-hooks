import React, { useState } from 'react';
import Name from './Name';
import uniqid from 'uniqid';

export function NameForm() {
  const [id, setId] = useState(uniqid());
  const [person, setPerson] = useState({
    name: '',
    department: '',
    id: id,
  });

  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    setPerson((person) => {
      return { ...person, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPeople(people.concat(person));
    setPerson({
      name: '',
      department: '',
      id: uniqid(),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            name="name"
            type="text"
            value={person.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Department
          <input
            name="department"
            type="text"
            value={person.department}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Name names={people} />
    </div>
  );
}
