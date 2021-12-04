import "./App.css"
import DateBar from "./components/date-bar/dateBar"
import Header from "./components/header/header"
import Button from "./components/button/button"
import Leaves from "./assets/Leaves.png"
import date from "./mock-data/date.json"
import HistoryList from "./components/history-list/historyList"
import history from "./mock-data/history.json"

function App() {
  return (
    <div className="App">
      <Header />
      <DateBar date={date} />
      <div className="leaves">
        <Button
          color="#283b1c"
          text="300"
          className="leaves-point"
          icon={Leaves}
        />
      </div>
      <HistoryList data={history} />
    </div>
  )
}

export default App
