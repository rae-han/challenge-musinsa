import React from 'react';
import {FilterContainer} from './styles'
import Options from '@components/Filter/Options';
import Selected from '@components/Filter/Selected';
import Search from '@components/Filter/Search';

function Filter () {
  return (
    <FilterContainer>
      <Options></Options>
      <Selected></Selected>
      <Search></Search>
    </FilterContainer>
  )
}

export default Filter;