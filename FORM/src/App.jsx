import React, { useState } from 'react';


const initialUsers = [{ name: 'DOHA', password: 'DOHA' }];

function Inscription() {
  const [users] = useState(initialUsers);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [sports, setSports] = useState([]);
  const [hobby, setHobby] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleLogin = () => {const foundUser = users.find((user) => user.name === name && user.password === password);
                             setLoginSuccess(!!foundUser);};

  

  const affich = () => {setShowInfo(true);};

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm border rounded">
        <h1 className="text-center mb-4">Inscription Form</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary mb-3" onClick={handleLogin}>Login</button>
        {loginSuccess ? (
          <form>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Your date:</label>
              <input type='date' className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">City:</label>
              <select className="form-select" value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select a city</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Sport:</label>
              <div className="form-check">
                <input type="checkbox" name="sport" value="tennis" className="form-check-input" checked={sports === "tennis"} onChange={(e) => setSports(e.target.value)} />tennis
              </div>
              <div className="form-check">
                <input type="checkbox" name="sport" value="football" className="form-check-input" checked={sports === "football"} onChange={(e) => setSports(e.target.value)} />football
              </div>
              <div className="form-check">
                <input type="checkbox" name="sport" value="swim" className="form-check-input" checked={sports === "swim"} onChange={(e) => setSports(e.target.value)} />swim
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Hobby:</label>
              <div className="form-check">
                <input type='radio' value="reading" className="form-check-input" checked={hobby === "reading"} onChange={(e) => setHobby(e.target.value)} />reading
              </div>
              <div className="form-check">
                <input type='radio' value="writing" className="form-check-input" checked={hobby === "writing"} onChange={(e) => setHobby(e.target.value)} />writing
              </div>
              <div className="form-check">
                <input type='radio' value="travel" className="form-check-input" checked={hobby === "travel"} onChange={(e) => setHobby(e.target.value)} />travel
              </div>
            </div>
            <button type='button' className="btn btn-success" onClick={affich}>Afficher</button>
          </form>
        ) : (
          <p className="text-danger text-center">Your login failed</p>
        )}
        {showInfo && (
          <p className="mt-3">Your date of birth is {date}, you live in {city}, you play these sports: {sports}, and you like {hobby} in your free time.</p>
        )}
      </div>
    </div>
  );
}

export default Inscription;
