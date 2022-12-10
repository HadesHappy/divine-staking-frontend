import { ethers } from 'ethers';
import ABI from './abi';
import { LOCAL_NETWORK, CONTRACT_ADDRESS } from '../utils/constants';
import { stringify } from 'querystring';

const provider = new ethers.providers.JsonRpcProvider(LOCAL_NETWORK);
const roiContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

const getTotalDeposit = async (account: string) => {
  try {
    const amount = await roiContract.getTotalDeposit(account);
    const amountEther = ethers.utils.formatEther(amount.toString());
    console.log('total deposit amount: ', amountEther);
    return Number(amountEther);
  }
  catch (error) {

  }
}

const deposit = async (amount: number) => {
  try {
    const amountEther = ethers.utils.parseEther(amount.toString());
    const walletProvider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = walletProvider.getSigner()

    const contractWithSigner = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const tx = await contractWithSigner.deposit({value: amountEther});

    console.log('tx: ', tx);
    // const tx = await signer.sendTransaction(unsignedTx);
    //const tx = await tmp.deposit({ value: amountEther })
    // console.log('tx: ', tx)
    // console.log(`Transaction Response TX hash: ${tx.hash}`);
    const receipt = await tx.wait();
    const response = {
      status: 'success',
      message: 'Deposit Succeed.'
    }
    return response;
  }
  catch (error) {
    const response = {
      status: 'fail',
      message: 'Deposit Failed.'
    }
    return response;
  }
}

const getMaticPrice = async () => {
  try {
    const price = await roiContract.getLatestPrice();
    const priceEther = ethers.utils.formatEther(price.toString())
    console.log('matic price: ', priceEther);
    return Number(priceEther);
  }
  catch (error) {
    console.log(error)
  }
}

export {
  deposit,
  getTotalDeposit,
  getMaticPrice,
}
