import React, {useCallback} from 'react';
import { AutoCompleteContainer } from './styles';

function AutoComplete ({ keyword, data = [], setValue, setFilters }) {
  const highlighted = useCallback((text, keyword) => {
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    const highlightKeyword = keyword.replaceAll('\\', '');

    return (
      <>{parts.map((part, i) => {
        return (
          <span
            key={i}
            className={part.toLowerCase() === highlightKeyword.toLowerCase() ? 'auto-complete__list--highlight' : ''}
          >
            {part}
          </span>
        )
      })}</>
    );
  }, [])

  const pushKeyword = useCallback((keyword) => {
    setValue('');
    setFilters(prev => prev.concat({
      key: keyword,
      title: keyword,
      type: 'keyword',
      cb: (value) => value.filter(item => {
        const specialRegExp = /([\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])/gi;
        const newKeyword = keyword.replace(specialRegExp, '\\\$1');
        const regExp = new RegExp(newKeyword, 'gi');
        return (regExp.test(item.goodsName) || regExp.test(item.brandName))
      })
    }))
  }, [setValue, setFilters])

  const specialRegExp = /([\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])/gi;
  const newKeyword = keyword.replace(specialRegExp, '\\\$1');

  const { goods, brand } = data.reduce((acc, cur) => {
    let { goodsName, brandName } = cur;

    if (new RegExp(`\^${newKeyword}`, 'gi').test(goodsName)) {
      acc = { ...acc, goods: { ...acc.goods, begin: acc.goods.begin.concat(goodsName)}}
    } else if (new RegExp(`${newKeyword}`, 'gi').test(goodsName)) {
      acc = { ...acc, goods: { ...acc.goods, match: acc.goods.match.concat(goodsName)}}
    }

    if (new RegExp(`\^${newKeyword}`, 'gi').test(brandName)) {
      acc = { ...acc, brand: { ...acc.brand, begin: acc.brand.begin.concat(brandName)}}
    } else if (new RegExp(`${newKeyword}`, 'gi').test(brandName)) {
      acc = { ...acc, brand: { ...acc.brand, match: acc.brand.match.concat(brandName)}}
    }

    return acc;
  }, {
    goods: {
      begin: [],
      match: [],
    },
    brand: {
      begin: [],
      match: [],
    }
  })

  return (
    <AutoCompleteContainer>
      {
        goods.begin.length === 0 && goods.match.length === 0
        && brand.begin.length === 0 && brand.match.length === 0
        && <div className="auto-complete--empty">추천 검색어 없음</div>
      }
      {/*{goods.begin.length !== 0 && goods.match.length !== 0 && <h2 className="">추천 검색어</h2>}*/}
      {goods.begin.map((item, index) => <div className="auto-complete__list" key={`goods_begin_${index}`} onClick={() => pushKeyword(item)}>{highlighted(item, newKeyword)}</div>)}
      {goods.match.map((item, index) => <div className="auto-complete__list" key={`goods_match_${index}`} onClick={() => pushKeyword(item)}>{highlighted(item, newKeyword)}</div>)}
      {brand.begin.map((item, index) => <div className="auto-complete__list" key={`brand_begin_${index}`} onClick={() => pushKeyword(item)}>
        <span className='auto-complete__list--brand-label'>브랜드</span>
        <span>{item}</span>
      </div>)}
      {brand.match.map((item, index) => <div className="auto-complete__list" key={`brand_match_${index}`} onClick={() => pushKeyword(item)}>
        <span className='auto-complete__list--brand-label'>브랜드</span>
        <span>{item}</span>
      </div>)}
    </AutoCompleteContainer>
  )
}

export default React.memo(AutoComplete);