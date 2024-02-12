import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();


    useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {setUsers(res.data);}) }, []);

    const handleSubmit = (e) => {e.preventDefault();
      const newUser = {name: name,
                       username: username,
                       email: email,
                       address: {
                       city: city,
                       street: street}};
      setUsers([...users, newUser]);
      setName('');
      setUsername('');
      setEmail('');
      setCity('');
      setStreet('');};

      

      return (
        <div className="container mt-5">
            <h1 className="text-danger">Nombre d'utilisateurs: {users.length}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" className="form-control" id="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street:</label>
                    <input type="text" className="form-control" id="street" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-danger">Add User</button>
            </form>
            <table className="table table-striped mt-5">
            <thead className="bg-danger text-white">
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;