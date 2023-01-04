import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../Assets/logo.svg';

const Header = () => (
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
    </div>
  </div>
);

export default Header;
