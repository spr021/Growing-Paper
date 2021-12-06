import "./leavesBaner.scss"
import leave from "../../assets/Leaves.png"

function LeavesBaner({point}) {
  return (
    <div className="leave-baner">
      <span>تعداد برگ های من : </span>
      <span>{point}</span>
      <img width="50px" height="50px" src={leave} alt="leave" />
    </div>
  )
}

export default LeavesBaner
