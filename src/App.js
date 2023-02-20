import logo from './logo.svg';
import './App.css';
import Container from './components/container';
import Header from './components/header';
import LeftSide from './components/leftSideNavigation';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header />
      </header>
      <div className='wrap'>
        <LeftSide />
        <Container />
      </div>
    </div>
  );
}

export default App;
