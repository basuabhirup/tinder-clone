import './App.css'
import Header from "./components/Header"
import Cards from './components/Cards'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
