import './ListItem.scss';
import { useNavigate } from 'react-router-dom';

export const ListItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div className={`list-item ${size}`} onClick={() => navigate(linkUrl)}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};
