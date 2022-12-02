import React from 'react';
import {ItemWrap} from '@components/Goods/styles';

function Item ({good}) {
  console.log(good)

  const onErrorImage = () => {
    console.log('error', good)
  }

  return (
    <ItemWrap>
      <img className="good__image" src={good.imageUrl} alt="" onError={onErrorImage} />
      <div className="good__info">
        <h2 className="good__brand-name">{good.brandName}</h2>
        <h1 className="good__good-name">{good.goodsName}</h1>
        <div className="good__row">
          <span className='good__price'>{good.price}</span>
          <span className='good__sale-rate'>{good.saleRate}％</span>
        </div>
        <p className='good__origin-price'>{good.normalPrice}</p>
      </div>
    </ItemWrap>
  )
}

export default Item;