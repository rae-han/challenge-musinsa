import React, {useEffect} from 'react';
import {GoodsContainer} from './styles';
import Item from '@components/Goods/Item';

function Goods ({goods}) {
  if (!goods) {
    return null;
  }

  return (
    <GoodsContainer>
      {goods.map((good, index) => (<Item key={good.goodsNo} good={good}></Item>))}
    </GoodsContainer>
  )
}

export default Goods;