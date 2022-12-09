import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="bg-[#101728]">
      <div className='max-w-[1440px] content-center m-auto'>
        <Header />
        <Main />
        <Toaster 
        position='top-center'
        reverseOrder={false}
        toastOptions={
          {
            duration: 3000,
            style: {
              borderRadius: '10px',
              background: '#a855f7',
              color: '#fff'
            }
          }
        }
        />
      </div>
    </div>
  );
}

export default App;
