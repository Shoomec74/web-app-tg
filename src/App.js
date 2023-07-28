import logo from './logo.svg';
import './App.css';

const webApp = window.Telegram.WebApp;

const onClose = (evt) => {
  console.log(`Я вызываюсь`);
  webApp.close();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClose}>Закрыть</button>
      </header>
      
    </div>
  );
}

export default App;
