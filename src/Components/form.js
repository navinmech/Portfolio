import React,{useState} from "react";
export default function Form(){
    const [firstName,setFirstName]=useState('');
    const [lastName,setlastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return(
        <form>
            <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
            required
            />
            <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={e=>setlastName(e.target.value)}
            required
            />
            <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
            />
            <button type="submit">Submit</button>
        </form>
    );
}