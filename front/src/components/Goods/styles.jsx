import styled from '@emotion/styled';

export const GoodsListContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 10px;
  background-color: var(--color-white);
`;

export const ItemWrap = styled.div`
  flex-basis: 50%;
  flex-grow: 0;
  flex-shrink: 0;
  
  .goods__image-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 188/226;
    overflow: hidden;

    .goods__image {
      width: 100%;
      aspect-ratio: 188/226;
      object-fit: cover;

      &.goods_image--notfound {
        transform: scale(1.05);
        //border-right: 1px solid #2970c2;
        //border-left: 1px solid #2970c2;
      }
    }
    
    .goods__image--soldout {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      font-family: 'Musinsa Font', sans-serif;
      font-size: 20px;
      font-weight: 500;
      background-color: var(--color-white);
      color: var(--color-777);
      opacity: .8;
    }
  }
  
  .goods__info {
    position: relative;
    padding: 20px 10px;

    .goods--exclusive {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 10px;
      top: -13px;
      width: 33px;
      height: 26px;
      font-family: 'Musinsa Font', sans-serif;
      font-size: 12px;
      background-color: var(--color-state-exclusive);
      color: var(--color-white);
      letter-spacing: -0.5px;
    }
    
    .goods__brand-name {
      font-size: 11px;
      font-weight: 400;
      color: var(--color-black);
      line-height: 1.45;
    }

    .goods__goods-name {
      width: 100%;
      height: 36px;
      margin-top: 8px;
      font-size: 14px;
      font-weight: 700;
      color: var(--color-black);
      line-height: 1.29;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    
    .goods__row {
      display: flex;
      justify-content: space-between;
      height: 24px;
      margin-top: 4px;
      font-family: 'Musinsa Font', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      
      .goods__sale-rate {
        color: var(--color-red);
      }
    }
    
    .goods__origin-price {
      height: 12px;
      font-family: 'Musinsa Font', sans-serif;
      font-size: 11px;
      font-weight: 500;
      line-height: 12px;
      color: var(--color-aaa);
      text-decoration: line-through;
    }
  }
`;