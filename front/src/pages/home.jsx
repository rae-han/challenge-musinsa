import React from 'react';
import DefaultLayout from '@layouts/DefaultLayout';
import Filter from '@components/Filter';
import Menu from '@components/Menu';

function Home() {
  return (
    <DefaultLayout>
      <Filter></Filter>
      <Menu></Menu>
    </DefaultLayout>
  )
}

export default Home;