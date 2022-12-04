import React, {useEffect} from 'react';
import { GoodsContainer, GoodsListContainer } from './styles';
import Item from '@components/Goods/Item';

function Goods ({goodsList, filters}) {
  if (!goodsList) {
    return null;
  }

  const result = filters.reduce((acc, cur) => {
    if (cur.cb) {
      acc = cur.cb(acc)
    }
    return acc;
  }, goodsList);

  return (
    <GoodsListContainer>
      {result.map((goods, index) => ((!goods.isSoldOut || goods.readable) && <Item key={`${index}_${goods.goodsNo}`} goods={goods}></Item>))}
    </GoodsListContainer>
  )
}

export default Goods;