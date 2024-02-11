import React, { useState } from 'react';
import Add from './add';

function App() {
  const [list, setList] = useState([
    { id: 1, nom: "banane", type: "fruit" },
    { id: 2, nom: "banane", type: "fruit" },
    { id: 3, nom: "orange", type: "fruit" },
    { id: 4, nom: "pomme", type: "fruit" },
    { id: 5, nom: "raisins", type: "fruit" },
    { id: 6, nom: "kiwi", type: "fruit" },
    { id: 7, nom: "tomate", type: "legume" },
    { id: 8, nom: "carotte", type: "legume" },
    { id: 9, nom: "pomme de terre", type: "legume" },
    { id: 10, nom: "navet", type: "legume" },
    { id: 11, nom: "poivron", type: "legume" }
  ]);

  const [type, setType] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type) return; // Check if type is selected
    const results = list.filter(a => a.type === type);
    setSearchResults(results);
  };

  return (
    <div className="container">
      <h1 className="my-4">Simple Search with React</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <select className="form-select" value={type} onChange={handleChange}>
            <option value="">-- Select Type --</option>
            <option value="fruit">Fruit</option>
            <option value="legume">Legume</option>
          </select>
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>NAME</th>
            <th>TYPE</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((a) => (
            <tr key={a.id}>
              <td>{a.nom}</td>
              <td>{a.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Add list={list} setList={setList} />
    </div>
  );
}

export default App;
