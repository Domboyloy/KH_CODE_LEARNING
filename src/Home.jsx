import React from 'react';
import { Button } from 'react-bootstrap';

import Header from './component/header';
import Search from './component/search';
import Card from './component/card';
import Join from './component/Join';

function Home() {
 return (
 <>

 <Header/>
  <Search/>
  <Card/>
  <Join/>

 </>
 );
}
export default Home;