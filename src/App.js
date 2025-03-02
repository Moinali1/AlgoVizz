import './App.css';
import Main from './components/Main'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AlgoCode from './components/AlgoCode';
import ContactUs from './components/ContactUs';
import VisualizerPage from './components/VisualizerPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Main />}/>
     <Route path='/algocodebubble' element={<AlgoCode render="bubble"/> }/>
     <Route path='/algocodeselection' element={<AlgoCode render="selection"/> }/>
     <Route path='/algocodeinsertion' element={<AlgoCode render="insertion"/> }/>
     <Route path='/algocodequick' element={<AlgoCode render="quick"/> }/>
     <Route path='/algocodemerge' element={<AlgoCode render="merge"/> }/>
     <Route path='/contactUs' element={<ContactUs />}/>
     <Route path='/VisualizerPage' element={<VisualizerPage />}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
