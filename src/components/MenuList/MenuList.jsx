import { ListItem } from '../ListItem/ListItem';
import './MenuList.scss';

export const MenuList = () => {
  const items = [
    {
      title: 'Hats',
      id: '1',
      imageUrl: 'assets/hats.webp',
    },
    {
      title: 'Jackets',
      id: '2',
      imageUrl: 'assets/jackets.png',
    },
    {
      title: 'Sneakers',
      id: '3',
      imageUrl: 'assets/sneakers.png',
    },
    {
      title: 'Womens',
      id: '4',
      size: 'large',
      imageUrl: 'assets/womens.webp',
    },
    {
      title: 'Mens',
      id: '5',
      size: 'large',
      imageUrl: 'assets/mens.webp',
    },
  ];

  return items.map(({ title, id, imageUrl, size }) => (
    <ListItem title={title} key={id} imageUrl={imageUrl} size={size} />
  ));
};
