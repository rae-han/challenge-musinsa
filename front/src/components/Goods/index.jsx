import React, { useEffect, useMemo } from 'react';
import { GoodsContainer, GoodsListContainer } from './styles';
import Item from '@components/Goods/Item';
import NotfoundGoods from '@components/Goods/NotfoundGoods';

function Goods ({goodsList, filters}) {
  if (!goodsList) {
    return null;
  }

  const result = useMemo(() => {
    return filters.reduce((acc, cur) => {
      if (cur.cb) {
        acc = cur.cb(acc)
      }
      return acc;
    }, goodsList);
  }, [goodsList, filters])

  if (!result) {
    return null;
  }

  return (
    <GoodsListContainer>
      {result.length !== 0
        ? [...new Set(result.map(JSON.stringify))].map(JSON.parse).map((goods, index) => ((!goods.isSoldOut || goods.readable) && <Item key={`${index}_${goods.goodsNo}`} goods={goods}></Item>))
        : <NotfoundGoods />
      }
    </GoodsListContainer>
  )
}

export default Goods;