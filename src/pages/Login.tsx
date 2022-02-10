import { useState } from 'react';
import '../styles/Login.css';

export function Login() {
  return (
    <div className="container">
      <h1>Access a wedding list</h1>
      <LoginForm></LoginForm>
    </div>
  );
}

const LoginForm = ({ handleSubmit }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <FormField label="Wedding code" type="text" data={username} setData={setUsername}></FormField>
      <FormField label="Password" type="password" data={password} setData={setPassword}></FormField>
    </>
  );
};

const FormField = ({ label, type, hidden = false, data, setData }: any) => {
  return (
    <div className="form-element">
      <label>{label}</label>
      <input type={type} value={data} onChange={(e) => setData(e.target.value)}></input>
    </div>
  );
};
