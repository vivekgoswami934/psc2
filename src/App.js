import './App.css';
import UseMEMO from './app/Component/UseMEMO';
import ShowData from './app/ShowData';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
        <div className="App">

          {/* <ShowData /> */}
          <UseMEMO />
          
        </div>
    </DataProvider>
  );
}

export default App;






