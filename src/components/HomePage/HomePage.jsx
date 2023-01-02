import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='menu-list'>
        <div className='list-item'>
          <div className='content'>
            <h1 className='title'>Hats</h1>
            <div className='subtitle'>Shop Now</div>
          </div>
        </div>
        <div className='list-item'>
          <div className='content'>
            <h1 className='title'>Jackets</h1>
            <div className='subtitle'>Shop Now</div>
          </div>
        </div>
        <div className='list-item'>
          <div className='content'>
            <h1 className='title'>Sneakers</h1>
            <div className='subtitle'>Shop Now</div>
          </div>
        </div>
        <div className='list-item'>
          <div className='content'>
            <h1 className='title'>Female</h1>
            <div className='subtitle'>Shop Now</div>
          </div>
        </div>
        <div className='list-item'>
          <div className='content'>
            <h1 className='title'>Male</h1>
            <div className='subtitle'>Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};
