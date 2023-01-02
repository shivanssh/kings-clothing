import './ListItem.scss';

export const ListItem = ({ title, imageUrl, size }) => (
  <div className={`list-item ${size}`}>
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
