import React, {useEffect} from 'react';
import {GoodsContainer} from './styles';
import Item from '@components/Goods/Item';

function Goods ({goods}) {
  // useEffect(() => {
  //   console.log('scroll event')
  //   function onScroll() {
  //     console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
  //     const scrollY = window.scrollY;
  //     const clientHeight = document.documentElement.clientHeight;
  //     const scrollHeight = document.documentElement.scrollHeight;
  //
  //     console.log(scrollY, clientHeight, scrollHeight);
  //
  //     // if(scrollY + clientHeight + 300 >= scrollHeight) {
  //     //   // console.log(hasMorePosts, !loadPostsLoading);
  //     //   // console.log(hasMorePosts && !loadPostsLoading);
  //     //   if(hasMorePosts && !loadPostsLoading) {
  //     //     // const lastId = mainPosts[mainPosts.length-1].id;
  //     //     // mainPosts 갯수가 0이면 에러가 난다.
  //     //     const lastId = mainPosts[mainPosts.length-1]?.id;
  //     //
  //     //     dispatch({
  //     //       type: LOAD_POSTS_REQUEST,
  //     //       lastId,
  //     //     })
  //     //   }
  //     // }
  //   }
  //
  //   window.addEventListener('scroll', onScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // }, [goods])

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