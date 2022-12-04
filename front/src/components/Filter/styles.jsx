import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  position: sticky;
  z-index: 1000;
  top: 50px;
  right: 0;
  left: 0;
  flex-shrink: 0;
`;

export const OptionsContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 55px;
  padding: 0 7px;
  background-color: var(--color-white);
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  
  .option__button {
    flex-shrink: 0;
    height: 35px;
    padding: 0 15px;
    border: 1px solid var(--color-eee);
    border-radius: 18px;
    font-size: 14px;
    font-weight: 400;
    
    &:not(:first-of-type) {
      margin-left: 5px;
    }
  }
  
  .option__button--active {
    color: var(--color-main);
  }

  .option__button--searching {
    border-color: var(--color-main);
    background-color: var(--color-main);
    color: var(--color-white); 
  }
`;

export const FilteredContainer = styled.div`
  position: relative;
  background-color: var(--color-white);
  
  .filtered__list {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    align-items: center;
    height: 50px;
    padding-left: 15px;
    padding-right: 70px;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  
  .filtered__button {
    flex-shrink: 0;
    height: 26px;
    padding-left: 10px;
    padding-right: 26px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    background-color: var(--color-main);
    background-image: url("../../../public/images/close.svg");
    background-position: right 6px center;
    background-size: 14px;
    background-repeat: no-repeat;
    color: var(--color-white);

    &:not(:first-of-type) {
      margin-left: 5px;
    }
  }

  .filtered__refresh-button {
    z-index: 100;
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: var(--color-white);
    background-image: url("../../../public/images/refresh.svg");
    background-size: 22px;
    background-position: center;
    background-repeat: no-repeat;
    
    &::before {
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 50px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%);
      transform: translateX(-100%);
      content: '';
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  height: 80px;
  padding: 20px 15px;
  background-color: var(--color-f9f9f9);
  
  .search__input {
    width: 100%;
    height: 100%;
    padding: 8px 10px;
    padding-left: 36px;
    border: 1px solid var(--color-ccc);
    font-size: 16px;
    font-weight: 400px;
    
    ::placeholder {
      color: var(--color-aaa);
    }
  }

  .search__button {
    position: absolute;
    top: 50%;
    left: 23px;
    width: 24px;
    height: 24px;
    background-image: url("../../../public/images/search_input.svg");
    background-position: center;
    background-size: 22px;
    background-repeat: no-repeat;
    transform: translate(0, -50%);
  }
  
`;