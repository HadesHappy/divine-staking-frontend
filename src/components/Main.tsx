import { useState, useEffect } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './sections/home'
import Deposit from './sections/deposit'
import Nft from './sections/nft'
import Mine from './sections/mine'
import Team from './sections/team'

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
    string = (<Deposit />)
  }
  else if (index === 2) {
    string = (<Nft />)
  }
  else if (index === 3) {
    string = (<Mine />)
  }
  else {
    string = (<Team />)
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