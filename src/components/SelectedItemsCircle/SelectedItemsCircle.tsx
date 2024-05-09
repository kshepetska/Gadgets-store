import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import './SelectedItemsCircle.scss';

type Type = 'cart' | 'favourite';

type Props = {
  type: Type;
};

export const SelectedItemsCircle: React.FC<Props> = ({ type }) => {
  const { cart, itemCount, favourites } = useAppContext();

  return (
    <>
      {type === 'cart' && !!cart.length && (
        <div className="circle">{itemCount}</div>
      )}
      {type === 'favourite' && !!favourites.length && (
        <div className="circle">{favourites.length}</div>
      )}
    </>
  );
};
