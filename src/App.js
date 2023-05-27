import './App.css';
import Parent from './app/Component/Parent';
import UseMEMO from './app/Component/UseMEMO';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
        <div className="App">

          {/* <ShowData /> */}
          {/* <UseMEMO />
           */}

           <Parent />
          
        </div>
    </DataProvider>
  );
}

export default App;






