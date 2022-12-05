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

  if (!result) {
    return null;
  }

  return (
    <GoodsListContainer>
      {result.length !== 0
        ? result.map((goods, index) => ((!goods.isSoldOut || goods.readable) && <Item key={`${index}_${goods.goodsNo}`} goods={goods}></Item>))
        : <div>검색 결과 없음</div>
      }
    </GoodsListContainer>
  )
}

export default Goods;