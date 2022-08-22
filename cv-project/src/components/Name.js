import React from 'react';


export default function Name(props) {
  return props.names.map((person) => {
    return (
      <div key={person.id}>
        <p>
          {person.name} works in {person.department}
        </p>
      </div>
    );
  });
}
