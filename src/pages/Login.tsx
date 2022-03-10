import { useEffect, useState } from 'react';
import { fakeData } from '../fakeData/fakeData';
import '../styles/Login.css';
import {Navigate} from 'react-router-dom'
export function Login({isLoggedIn, setIsLoggedIn} : any) { 
  
  return (
    isLoggedIn ?  <Navigate to='/gifts'/> :
    <div className="container">
      <h1>Access a wedding list</h1>
      <LoginForm setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}></LoginForm>
    </div>
  );
}

const LoginForm = ({ handleSubmit, setIsLoggedIn, isLoggedIn }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
   if (fakeData.some(el => el.listNumber === parseInt(username)) && fakeData.some(el => el.password === password)){
    setIsLoggedIn({listNumber: username, password: password})   
   }
  }, [username,password])
  
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