import React, {useEffect} from 'react';
import { GoodsContainer, GoodsListContainer } from './styles';
import Item from '@components/Goods/Item';

function Goods ({goodsList, filters}) {
  if (!goodsList) {
    return null;
  }

  console.log('#### filteredGoodsList')
  console.log(filters)
  const result = filters.reduce((acc, cur) => {
    if (cur.type === 'state') {
      acc = cur.cb(acc)
    }
    return acc;
  }, goodsList);
  console.log(result);

  return (
    <GoodsListContainer>
      {result.map((goods, index) => ((!goods.isSoldOut || goods.readable) && <Item key={`${index}_${goods.goodsNo}`} goods={goods}></Item>))}
    </GoodsListContainer>
  )
}

export default Goods;