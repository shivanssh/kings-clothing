import { SHOP_DATA as collections } from '../../data/shopData';
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
