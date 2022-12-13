import { useState, useEffect } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

import Home from './sections/home'
import Loan from './sections/Loan'
import Team from './sections/team'
import Nft from './sections/nft'
import Contact from './sections/contact'

const Main = () => {
  const [index, setIndex] = useState<number>(0)
  useEffect(() => {
    setIndex(0)
  }, []);
  let string;
  if (index === 0) {
    string = (<Home />)
  }
  else if (index === 1) {
    string = (<Loan />)
  }
  else if (index === 2) {
    string = (<Team />)
  }
  else if (index === 3) {
    string = (<Nft />)
  }
  else {
    string = (<Contact />)
  }

  return (
    <div className='text-sm'>
      <Header />
      {string}
      <Footer index={index} setIndex={setIndex} />
    </div>
  )
}

export default Main