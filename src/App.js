import './App.css';
import './style.css';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import Config from './config.json';

function App() {
  
  return (
    
    <div className="container">
        <Sidebar Data = {Config.Sidebar}/>
        <MainPage MainData = {Config.Main}/>
       
    </div>
  );
}

export default App;
