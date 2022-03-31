import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeUsers } from '../fakeData/fakeUsers';

export function UserLogin(props: any) {
  const [userNameTyped, setUserNameTyped] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (fakeUsers.some((el) => el.userName === userNameTyped)) {
      props.setUserLoggedIn(userNameTyped);
      navigate('/');
    }
  }, [userNameTyped]);

  return (
    <>
      <FormField label="User name" type="text" data={userNameTyped} setData={setUserNameTyped}></FormField>
    </>
  );
}

const FormField = ({ label, type, hidden = false, data, setData }: any) => {
  return (
    <div className="form-element">
      <label>{label}</label>
      <input type={type} value={data} onChange={(e) => setData(e.target.value)}></input>
    </div>
  );
};
