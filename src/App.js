import './App.css';
import DateBar from './components/date-bar/dateBar';
import Header from './components/header/header';
import date from "./mock-data/date.json"

function App() {
  return (
    <div className="App">
      <Header />
      <DateBar date={date} />
    </div>
  );
}

export default App;
