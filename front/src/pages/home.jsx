import React, { useCallback, useEffect, useState } from 'react';
import DefaultLayout from '@layouts/DefaultLayout';
import Filter from '@components/Filter';
import Goods from '@components/Goods';
import { fetchGoodsAPI } from '../apis/menu';

function Home() {
  const [goodsIndex, setGoodsIndex] = useState(0);
  const [goods, setGoods] = useState(null)

  const fetchGoods = useCallback(async (index) => {
    return await fetchGoodsAPI(index);
  }, [goodsIndex])

  useEffect(() => {
    const fetchAndSetGoods = async () => {
      const response = await fetchGoods(goodsIndex);

      if (response?.data?.list) {
        setGoods(response.data.list);
      }
    }
    fetchAndSetGoods();
  }, [])

  useEffect(() => {

  }, [goods])

  return (
    <DefaultLayout>
      <Filter></Filter>
      <Goods goods={goods}></Goods>
    </DefaultLayout>
  )
}

export default Home;