import styled from '@emotion/styled';

export const GoodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 10px;
  background-color: var(--color-white);
`;

export const ItemWrap = styled.div`
  flex-basis: 50%;
  flex-shrink: 0;
  
  .good__image {
    width: 100%;
    background-color: grey;
    aspect-ratio: 188/226;
    object-fit: cover;
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
  }
`;