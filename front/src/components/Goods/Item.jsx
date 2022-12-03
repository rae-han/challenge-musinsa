import React, { useCallback, useMemo, useState } from 'react';
import {ItemWrap} from '@components/Goods/styles';
import { commaNumber } from '../../utils/commaNumber';
import { classnames } from '../../utils/classnames';
import notfoundImage from '@images/notfoundImage.jpeg'

function Item ({good}) {
  const [isErrorImage, setIsErrorImage] = useState(false)

  const onErrorImage = useCallback(() => {
    setIsErrorImage(true)
  }, [good.imageUrl, isErrorImage])

  const goodPrice = useMemo(() => {
    return commaNumber(good.price);
  }, [good.price])

  const goodNormalPrice = useMemo(() => {
    return commaNumber(good.normalPrice);
  }, [good.normalPrice])

  return (
    <ItemWrap>
      <div className="good__image-wrap">
        <img className={classnames("good__image", { 'good_image--notfound': isErrorImage, qwer: true })} src={!isErrorImage ? good.imageUrl : notfoundImage} alt="" onError={onErrorImage} />
        {good.isSoldOut && <div className="good__image--soldout">SOLD OUT</div>}
      </div>
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