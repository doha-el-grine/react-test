import React, { useState } from "react";
import Presentation from "./Presentation";

function App() {

  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState({name: '',last_name: '',deploma:'' });

  const handleSubmit = (e) => {e.preventDefault();
    setList([...list, newItem]);
    setNewItem({ name: '', last_name: '',deploma:'' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label class="form-label">name</label>
        <input class="form-control" type="text" name="name" value={newItem.name} onChange={handleInputChange} />
        <label class="form-label">last name</label>
        <input class="form-control" type="text" name="last_name" value={newItem.last_name} onChange={handleInputChange} />
        <label class="form-label">deplome</label>
        <input class="form-control" type="text" name="deploma" value={newItem.deploma} onChange={handleInputChange} />
        <br />
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
      {list.map((item, index) => (<Presentation key={index} name={item.name} last_name={item.last_name} deploma={item.deploma} />))}
    </div>
  );
}

export default App;

