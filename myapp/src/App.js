import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         ChatBot
        </p>

       
      </header>
    </div>
    <Chat/>
    </>
  );
}

export default App;
