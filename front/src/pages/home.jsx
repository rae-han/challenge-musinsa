import React, { useCallback, useEffect, useRef, useState } from 'react';
import DefaultLayout from '@layouts/DefaultLayout';
import Filter from '@components/Filter';
import Goods from '@components/Goods';
import Loading from '@components/Loading';
import { fetchGoodsAPI } from '../apis/menu';
import { useThrottle } from '../hooks/useThrottle';

function Home() {
  // const [pageIndex, setPageIndex] = useState(0);
  const pageIndex = useRef(0);
  const [goods, setGoods] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const fetchGoods = useCallback(async () => {
    setIsLoading(true)
    console.log(2222, pageIndex)
    const response = await fetchGoodsAPI(pageIndex.current);
    pageIndex.current = pageIndex.current + 1
    setIsLoading(false)
    return response;
  }, [pageIndex.current])
  //
  const onScroll = useCallback(async () => {
    console.log('scroll event')
    const scrollY = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if(scrollY + clientHeight + 300 >= scrollHeight) {
      console.log('fetch data')
      if (!isLoading && pageIndex.current < 3) {
        const response = await fetchGoods();
        console.log(1111, pageIndex.current, response.data.list);

        if (response?.data?.list) {
          setGoods(prev => [...prev, ...response?.data?.list])
        }
      }
    }
  }, [pageIndex.current, isLoading])

  const throttleOnScroll = useThrottle(onScroll, 500)
  //
  useEffect(() => {
    console.log('한번만 실행 되야하는 애')
    const fetchAndSetGoods = async () => {
      const response = await fetchGoods(0);

      if (response?.data?.list) {
        setGoods(response.data.list);
      }
    }
    fetchAndSetGoods();

    window.addEventListener('scroll', throttleOnScroll);

    return () => {
      window.removeEventListener('scroll', throttleOnScroll)
    }
  }, [])
  //

  // useEffect(() => {
  //   // console.log('scroll event')
  //   async function onScroll() {
  //     // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
  //     const scrollY = window.scrollY;
  //     const clientHeight = document.documentElement.clientHeight;
  //     const scrollHeight = document.documentElement.scrollHeight;
  //
  //     if(scrollY + clientHeight + 300 >= scrollHeight) {
  //       console.log(!isLoading, pageIndex)
  //       if (!isLoading && pageIndex < 3) {
  //         const response = await fetchGoods(pageIndex);
  //         // console.log('new data', response?.data?.list)
  //         if (response?.data?.list) {
  //           setGoods(prev => [...prev, ...response?.data?.list])
  //         }
  //       }
  //     }
  //   }
  //
  //   window.addEventListener('scroll', useThrottle(onScroll, 100));
  //
  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // }, [goods, isLoading, pageIndex, fetchGoods, setGoods])

  return (
    <DefaultLayout>
      <Filter></Filter>
      <button onClick={() => {
        console.log(pageIndex.current)
      }}>test</button>
      <Goods goods={goods} ></Goods>
      {isLoading && <Loading />}
    </DefaultLayout>
  )
}

export default Home;