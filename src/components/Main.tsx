import {useState, useEffect} from 'react'
import Description from './Description'
import Divider from './Devider'
import Deposit from './Deposit'
import Earning from './Earning'
import Balance from './Balance'
import Withdraw from './Withdraw'
import Header from './Header'

const Main = () => {
  return (
    <>
      <Header/>
      <Deposit/>
      <Divider />      
      <Description />
      <Divider />
      <Earning />
      <Balance /> 
      <Withdraw />
    </>
  )
}

export default Main