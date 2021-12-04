import "./App.css"
import Header from "./components/header/header"
import CardPage from "./pages/card-page/CardPage"
import History from "./pages/history/History"
import Route from "./Route"

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <History />
      </Route>
      <Route path="/rooyesh">
        <CardPage />
      </Route>
    </div>
  )
}

export default App
