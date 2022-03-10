import { useEffect, useState } from 'react';
import { fakeData } from '../fakeData/fakeData';
import '../styles/Login.css';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { List, RootState, logIntoList } from '..';

export function Login() {
  const currentList: List = useSelector((state: RootState) => state.currentList);

  return currentList ? (
    <Navigate to="/gifts" />
  ) : (
    <div className="container">
      <h1>Access a wedding list</h1>
      <LoginForm />
    </div>
  );
}

const LoginForm = ({ handleSubmit }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const currentList: List = useSelector((state: RootState) => state.currentList);
  const dispatch = useDispatch();

  useEffect(() => {
    const numberUsername = parseInt(username);
    if (fakeData.some((el) => el.listNumber === numberUsername) && fakeData.some((el) => el.password === password)) {
      dispatch(logIntoList({ listNumber: numberUsername, password: password, gifts: [] }));
    }
  }, [username, password]);

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
