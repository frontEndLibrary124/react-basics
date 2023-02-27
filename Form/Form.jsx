import React, { useState } from 'react';

const Form = () => {
    const [user, setUser] = useState({name: '', email: '', password: ''});

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({name: '', email: '', password: ''});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} placeholder="Your name" required />
            <input type="email" name="email" onChange={handleChange} placeholder="Your email" required />
            <input type="password" name="password" onChange={handleChange} placeholder="Your password" required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;