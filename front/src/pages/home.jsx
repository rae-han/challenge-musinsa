import React, { useCallback, useEffect, useRef, useState } from 'react';
import DefaultLayout from '@layouts/DefaultLayout';
import Filter from '@components/Filter';
import Goods from '@components/Goods';
import Loading from '@components/Loading';
import { fetchGoodsAPI } from '../apis/menu';
import filter from '@components/Filter';

function Home() {
  const [goodsIndex, setGoodsIndex] = useState(0);
  const [goods, setGoods] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const fetchGoods = useCallback(async () => {
    setIsLoading(true)
    console.log('goodsIndex', goodsIndex)
    const response = await fetchGoodsAPI(goodsIndex);
    setGoodsIndex(prev => prev+1);
    setIsLoading(false)
    return response;
  }, [goodsIndex])

  useEffect(() => {
    const fetchAndSetGoods = async () => {
      const response = await fetchGoods();

      if (response?.data?.list) {
        setGoods(response.data.list);
      }
    }
    fetchAndSetGoods();
  }, [])

  useEffect(() => {
    console.log('scroll event')
    async function onScroll() {
      // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      const scrollY = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if(scrollY + clientHeight + 300 >= scrollHeight) {
        if (!isLoading && goodsIndex < 3) {
          const response = await fetchGoods();
          console.log('new data', response?.data?.list)
          if (response?.data?.list) {
            setGoods(prev => [...prev, ...response?.data?.list])
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [goods, fetchGoods])

  return (
    <DefaultLayout>
      <Filter></Filter>
      <Goods goods={goods} ></Goods>
      {isLoading && <Loading />}
    </DefaultLayout>
  )
}

export default Home;