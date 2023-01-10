import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import useAuthUser from '../../hooks/useAuthUser';
import { auth } from '../../utils/firebase';

const Header = () => {
  const user = useAuthUser();

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options-container'>
        <Link className='option' to='shop'>
          Shop
        </Link>
        <Link className='option' to='contact'>
          Contact
        </Link>
        {user ? (
          <div className='option' onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link className='option' to='signin'>
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
