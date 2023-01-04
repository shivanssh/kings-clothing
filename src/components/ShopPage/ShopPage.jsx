import { SHOP_DATA as collections } from '../../Data/ShopData';
import Preview from '../Preview/Preview';
import './ShopPage.scss';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Preview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
