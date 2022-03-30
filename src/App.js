import './App.css';
import Header from './components/Header/Header';
import Qna from './components/Qna/Qna';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qna></Qna>
    </div>
  );
}

export default App;
