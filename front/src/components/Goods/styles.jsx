import styled from '@emotion/styled';

export const GoodsContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding-top: 10px;
  background-color: var(--color-white);
`;

export const ItemWrap = styled.div`
  flex-basis: 50%;
  flex-shrink: 0;
  
  .good__image-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 188/226;
    overflow: hidden;

    .good__image {
      width: 100%;
      aspect-ratio: 188/226;
      object-fit: cover;

      &.good_image--notfound {
        //transform: scale(1.02);
        border-right: 1px solid #2970c2;
        border-left: 1px solid #2970c2;
      }
    }
    
    .good__image--soldout {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      font-size: 20px;
      font-weight: 500;
      background-color: var(--color-white);
      color: var(--color-777);
      opacity: .8;
    }
  }
  
  .good__info {
    padding: 20px 10px;
    
    .good__brand-name {
      font-size: 11px;
      font-weight: 400;
      color: var(--color-black);
      line-height: 1.45;
    }

    .good__good-name {
      height: 36px;
      margin-top: 8px;
      font-size: 14px;
      font-weight: 700;
      color: var(--color-black);
      line-height: 1.29;
    }
    
    .good__row {
      display: flex;
      justify-content: space-between;
      height: 24px;
      margin-top: 4px;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      
      .good__sale-rate {
        color: var(--color-red);
      }
    }
    
    .good__origin-price {
      height: 12px;
      font-size: 11px;
      font-weight: 500;
      line-height: 12px;
    }
  }
`;