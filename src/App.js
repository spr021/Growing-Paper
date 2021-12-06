import "./App.css"
import Header from "./components/header/header"
import CardPage from "./pages/card-page/CardPage"
import History from "./pages/history/History"
import Route from "./Route"
import cardList from "./mock-data/grow"
import { useState } from "react"
import CardDetile from "./pages/card-detile/CardDetile"

function App() {
  const [point, setPoint] = useState(cardList.point)

  return (
    <div className="App">
      <Header />
      <Route path="/">
        <History point={point} />
      </Route>
      <Route path="/rooyesh">
        <CardPage point={point} />
      </Route>
      <Route path="/rooyesh/detile/">
        <CardDetile point={point} setPoint={setPoint} />
      </Route>
    </div>
  )
}

export default App
