import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import MainComponent from './components/mainContainer/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <MainComponent />
    </div>
  );
}

export default App;
