import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '..';
import { List, RootState } from '..';

import '../styles/NavBar.css';

const NavBar = (props: any) => {
  const dispatch = useDispatch();
  const currentList: List = useSelector((state: RootState) => state.currentList);

  return (
    <nav>
      <Link to="/">
        <img src="https://i.imgur.com/EPU5Pxt.png" alt="TieMyKnot logo" id="nav-logo" />
      </Link>
      <Link to="/userLogin">
        <div>{props.userLoggedIn ? 'Logged in' : 'User Login'}</div>
      </Link>
      {currentList && (
        <div className="logout">
          <div> Viewing list: {currentList.listNumber}</div>
          <hr />
          <Link
            to="/"
            className="logout-button"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Exit Wedding List
          </Link>
        </div>
      )}
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>User Icon</title>
          <desc>An user icon, can be used to go back to main page</desc>
          <path d="M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z" />
        </svg>
      </Link>
    </nav>
  );
};

export default NavBar;
