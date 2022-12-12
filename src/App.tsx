import Main from './components/Main';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
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
  );
}

export default App;
