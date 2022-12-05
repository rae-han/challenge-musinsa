import React, { useCallback, useMemo, useState } from 'react';
import {ItemWrap} from '@components/Goods/styles';
import { commaNumber } from '../../utils/commaNumber';
import { classnames } from '../../utils/classnames';
import notfoundImage from '@images/notfoundImage.jpeg'

function Item ({goods}) {
  const [isErrorImage, setIsErrorImage] = useState(false)

  const onErrorImage = useCallback(() => {
    setIsErrorImage(true)
  }, [goods.imageUrl, isErrorImage])

  const goodsPrice = useMemo(() => {
    return commaNumber(goods.price);
  }, [goods.price])

  const goodsNormalPrice = useMemo(() => {
    return commaNumber(goods.normalPrice);
  }, [goods.normalPrice])

  return (
    <ItemWrap>
      <div className="goods__image-wrap">
        <img className={classnames("goods__image", { 'goods_image--notfound': isErrorImage, qwer: true })} src={!isErrorImage ? goods.imageUrl : notfoundImage} alt="" onError={onErrorImage} />
        {goods.isSoldOut && <div className="goods__image--soldout">SOLD OUT</div>}
      </div>
      <div className="goods__info">
        {goods.isExclusive && <span className="goods--exclusive">단독</span>}
        <h2 className="goods__brand-name">{goods.brandName}</h2>
        <h1 className="goods__goods-name">{goods.goodsName}</h1>
        <div className="goods__row">
          <span className='goods__price'>{goodsPrice}원</span>
          {goods.isSale && <span className='goods__sale-rate'>{goods.saleRate}％</span>}
        </div>
        {goods.isSale && <p className='goods__origin-price'>{goodsNormalPrice}원</p>}
      </div>
    </ItemWrap>
  )
}

export default Item;