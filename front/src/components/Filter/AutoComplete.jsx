import React from 'react';
import { AutoCompleteContainer } from './styles';

function AutoComplete ({ keyword, data = [] }) {
  const { goodsNames, brandNames } = data.reduce((acc, cur) => {
    const { goodsName, brandName } = cur;
    // console.log(goodsName, brandName)

    // const regExp = new RegExp(`^${keyword}`, 'gi');
    // console.log(111111)
    // const regExp = new RegExp(`^${keyword}`, 'gi');
    // console.log(regExp, keyword, regExp.test(goodsName));
    //
    // console.log(keyword.match(regExp))

    return acc;
  }, {
    goodsNames: {
      begin: [],
      match: [],
    },
    brandNames: {
      begin: [],
      match: [],
    }
  })

  console.log(goodsNames, brandNames)

  return (
    <AutoCompleteContainer>

    </AutoCompleteContainer>
  )
}

export default React.memo(AutoComplete);