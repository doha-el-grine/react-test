import React, { useState } from 'react';

function Add({ list, setList }) {
  const [newItem, setNewItem] = useState({ nom: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.nom || !newItem.type) return; // Check if name and type are filled
    const id = list.length + 1;
    setList([...list, { id, ...newItem }]);
    setNewItem({ nom: '', type: '' });
  };

  return (
    <>
      <h1>Add Form:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={newItem.nom} onChange={(e) => setNewItem({ ...newItem, nom: e.target.value })} />
        <input type="text" placeholder="Type" value={newItem.type} onChange={(e) => setNewItem({ ...newItem, type: e.target.value })} />
        <button type='submit'>Save</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {list && list.length > 0 && list.map((item) => (
            <tr key={item.id}>
              <td>{item.nom}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Add;
