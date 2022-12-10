import { ethers } from 'ethers';
import ABI from './abi';
import { LOCAL_NETWORK, CONTRACT_ADDRESS } from '../utils/constants';

const provider = new ethers.providers.JsonRpcProvider(LOCAL_NETWORK);
const roiContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

const getTotalDeposit = async (account: string) => {
  try{
    const amount = await roiContract.getTotalDeposit(account);
    console.log('total amount: ', amount);
    return amount;
  }
  catch(error){

  }
}

const deposit = async (amount: number) => {
  try{
    const response = await roiContract.deploy({amount});
    console.log('response: ', response);
  }
  catch(error){

  }
}

const getMaticPrice = async() => {
  try{
    const price = await roiContract.getLatestPrice();
    console.log('matic price: ', price);
    return price;
  }
  catch(error){

  }
}

export {
  deposit,
  getTotalDeposit,
  getMaticPrice,
}
