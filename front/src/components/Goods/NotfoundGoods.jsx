import React from 'react';
import styled from '@emotion/styled';
import emptyImg from '@images/icon-general-empty.svg'

const NotfoundGoodsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 210px;
  text-align: center;
  
  .empty-img {
    width: 90px;
    height: 90px;
    margin: 0 auto;
  }
  
  .empty-text {
    margin-top: 4px;
    font-size: 14px;
    color: var(--color-aaa);
    line-height: 21px;
  }
`;

function NotfoundGoods () {
  return (
    <NotfoundGoodsWrap>
      <img className="empty-img" src={emptyImg} alt="검색 결과 없음" />
      <span className="empty-text">검색 결과 없음</span>
    </NotfoundGoodsWrap>
  )
}

export default NotfoundGoods;