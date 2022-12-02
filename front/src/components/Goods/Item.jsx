import React, { useMemo } from 'react';
import {ItemWrap} from '@components/Goods/styles';
import { commaNumber } from '../../utils/commaNumber';

function Item ({good}) {
  console.log(good)

  const onErrorImage = () => {
    console.log('error', good)
  }

  const goodPrice = useMemo(() => {
    return commaNumber(good.price);
  }, [good.price])

  const goodNormalPrice = useMemo(() => {
    return commaNumber(good.normalPrice);
  }, [good.normalPrice])

  return (
    <ItemWrap>
      <img className="good__image" src={good.imageUrl} alt="" onError={onErrorImage} />
      <div className="good__info">
        <h2 className="good__brand-name">{good.brandName}</h2>
        <h1 className="good__good-name">{good.goodsName}</h1>
        <div className="good__row">
          <span className='good__price'>{goodPrice}</span>
          <span className='good__sale-rate'>{good.saleRate}％</span>
        </div>
        <p className='good__origin-price'>{goodNormalPrice}원</p>
      </div>
    </ItemWrap>
  )
}

export default Item;