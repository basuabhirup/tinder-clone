import './App.css'
import Header from "./components/Header"
import Cards from './components/Cards'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
    <div className="app">
      <h1>Hello, App here</h1>
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
