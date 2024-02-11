import React, { useState } from 'react';

function Inscription() {
  const [name, setName] = useState('');
  const [lstname, setLstname] = useState('');
  const [pass, setPass] = useState('');
  const [inf, setInf] = useState('');

  function envoyer() {
    setInf(`name: ${name} last name: ${lstname} your password ${pass}`);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Sign Up</h5>
          <form>
            <div className="form-group">
              <label htmlFor="nom">Nom:</label>
              <input id="nom" type="text" className="form-control" onChange={(e) => { setName(e.target.value.toUpperCase()) }}/>
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom:</label>
              <input id="prenom" type="text" className="form-control" onChange={(e) => { setLstname(e.target.value.toUpperCase()) }}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input id="password" type="password" className="form-control" placeholder="Enter password here" value={pass} onChange={(e) => { setPass(e.target.value) }} />
              {pass.length < 4 ? <small className="form-text text-danger">Le mot de passe doit avoir au moins 4 caractères</small> : ""}
            </div>
            <button type='button' className="btn btn-primary" onClick={envoyer}>Submit</button>
          </form>
          <p>{inf}</p>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
