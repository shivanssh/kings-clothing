import './HomePage.scss';
import { MenuList } from './../MenuList/MenuList';

export const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='menu-list'>
        <MenuList />
      </div>
    </div>
  );
};
