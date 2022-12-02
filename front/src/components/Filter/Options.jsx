import React from 'react';
import {OptionsContainer} from './styles'

function Options ({ setIsSearch }) {
  return (
    <OptionsContainer>
      <button onClick={() => setIsSearch(prev => !prev)}>toggleSearch</button>
    </OptionsContainer>
  )
}

export default Options;