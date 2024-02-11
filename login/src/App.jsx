import React, { useState } from 'react';

const Dbinit = [{ name: '', password: '' }];

function Inscription() {
  const [userlist, setUserlist] = useState(Dbinit);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = (e) => {e.preventDefault();
    setUserlist([...userlist, { name, password }]);
    setName('');
    setPassword('');};

  const deleteUser = (index) => {const updatedUserList = userlist.filter((_, i) => i !== index);
    setUserlist(updatedUserList); };
    
    const findUser = (searchName) => {
      const foundUser = userlist.find(user => user.name.toLowerCase() === searchName.toLowerCase());
      setSearchResult(foundUser);
    }
    

  return (
    <>
      <h1 className="display-4 text-center mt-4 mb-5">Inscription</h1>
      <form onSubmit={handleSubmit} className="mb-4">
      <div className="row justify-content-center">
          <div className="col-md-4">
            <input type="text" className="form-control mb-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="col-md-4">
            <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary mb-2">Save</button>
          </div>
        </div>
      </form>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userlist.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => deleteUser(index)} className="btn btn-danger">Delete</button>
              </td>
            </tr>))}
        </tbody>
      </table>
      <p>Search user here :</p>
      <form onSubmit={(e) => { e.preventDefault(); findUser(name); }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      {searchResult && (<div className="mt-3">
    <h3>Search Result:</h3>
    <table>
      <tbody>
        <tr>
          <td>Result Name:</td>
          <td>{searchResult.name}</td>
        </tr>
        <tr>
          <td>Result Password:</td>
          <td>{searchResult.password}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
)}

    </>
  );
}

export default Inscription;
