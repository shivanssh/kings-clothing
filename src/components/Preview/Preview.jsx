import CollectionItem from '../CollectionItem/CollectionItem';
import './Preview.scss';

const Preview = ({ title, items }) => (
  <div className='preview-container'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default Preview;
