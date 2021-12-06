import { useState } from "react"
import "./historyList.scss"
import vase from "../../assets/vase.webp"
import Stem from "../../assets/Stem.png"
import HistoryCard from "../history-card/historyCard"

function HistoryList({ data }) {
  const [listSize, setListSize] = useState(8)

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setListSize(listSize + 3)
    }
  }

  return (
    <div className="history">
      <div className="vase">
        <img src={vase} alt="vase" width="80px" height="93" />
        {data.history.slice(0, listSize).map((item) => (
          <img
            key={item.date}
            src={Stem}
            width="75px"
            height="105px"
            alt="Stem"
          />
        ))}
      </div>
      <div className="list">
        {data.history.slice(0, listSize).map((item) => (
          <HistoryCard key={item.date} data={item} />
        ))}
      </div>
    </div>
  )
}

export default HistoryList
