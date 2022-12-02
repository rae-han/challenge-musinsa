import React, { useCallback, useEffect, useState } from 'react';
import DefaultLayout from '@layouts/DefaultLayout';
import Filter from '@components/Filter';
import Goods from '@components/Goods';
import Loading from '@components/Loading';
import { fetchGoodsAPI } from '../apis/menu';

function Home() {
  const [goodsIndex, setGoodsIndex] = useState(0);
  const [goods, setGoods] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  const fetchGoods = useCallback(async (index) => {
    setIsLoading(true)
    const response = await fetchGoodsAPI(index);
    setIsLoading(false)
    return response;
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

  // useEffect(() => {
  //   function onScroll() {
  //     console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
  //     const scrollY = window.scrollY;
  //     const clientHeight = document.documentElement.clientHeight;
  //     const scrollHeight = document.documentElement.scrollHeight;
  //
  //     if(scrollY + clientHeight + 300 >= scrollHeight) {
  //       // console.log(hasMorePosts, !loadPostsLoading);
  //       // console.log(hasMorePosts && !loadPostsLoading);
  //       if(hasMorePosts && !loadPostsLoading) {
  //         // const lastId = mainPosts[mainPosts.length-1].id;
  //         // mainPosts 갯수가 0이면 에러가 난다.
  //         const lastId = mainPosts[mainPosts.length-1]?.id;
  //
  //         dispatch({
  //           type: LOAD_POSTS_REQUEST,
  //           lastId,
  //         })
  //       }
  //     }
  //   }
  //
  //   window.addEventListener('scroll', onScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // }, [hasMorePosts, loadPostsLoading, mainPosts])

  return (
    <DefaultLayout>
      <Filter></Filter>
      <Goods goods={goods}></Goods>
      {isLoading && <Loading />}
    </DefaultLayout>
  )
}

export default Home;