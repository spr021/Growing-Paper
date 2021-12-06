import "./historyCard.scss"
import green from "../../assets/green-Leaves.png"
import orange from "../../assets/orange-Leaves.png"

function HistoryCard({ data }) {
  return (
    <div className="history-card">
      <span>{new Date(data.date).getMinutes() + " : " + new Date(data.date).getHours()}</span>
      <div className={"card " + (data.type === "increase" ? "green-card" : "orange-card")}>
        <div>{data.text}</div>
        <div className="point">
          <span>{data.point}</span>
          <img alt="Leaves" width="30px" height="30px" src={data.type === "increase" ? green : orange} />
        </div>
      </div>
    </div>
  )
}

export default HistoryCard
