import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event:any) => {
        event.preventDefault();
        // TODO: Implement login logic
      };

    return (
    <form onSubmit={handleSubmit}>
        <h2>Kirjaudu sisään</h2>
        <div className="flex gap-s flex-col">
            <input value={username} placeholder="Käyttäjätunnus" onChange={(e) => setUsername(e.target.value)}></input>
            <input value={password} type="password" placeholder="Salasana" onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit" className="kirjauduButton">Kirjaudu</button>
        </div>

    </form>
)}

export default LoginForm;