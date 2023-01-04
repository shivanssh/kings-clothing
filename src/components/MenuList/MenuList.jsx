import { ListItem } from '../ListItem/ListItem';
import './MenuList.scss';

export const MenuList = () => {
  const items = [
    {
      title: 'Hats',
      id: '1',
      imageUrl: 'assets/hats.webp',
      linkUrl: 'hats',
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
      linkUrl: '',
    },
    {
      title: 'Womens',
      id: '4',
      size: 'large',
      imageUrl: 'assets/womens.webp',
      linkUrl: '',
    },
    {
      title: 'Mens',
      id: '5',
      size: 'large',
      imageUrl: 'assets/mens.webp',
      linkUrl: '',
    },
  ];

  return items.map(({ id, ...otherSectionProps }) => (
    <ListItem key={id} {...otherSectionProps} />
  ));
};
