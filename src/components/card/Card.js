import Link from "../../Link"
import leave from "../../assets/Leaves.png"
import "./Card.scss"

function Card({ point, img, deadline, id }) {
  const clcDeadline = new Date(new Date(deadline) - new Date())
  const clc = !isNaN(clcDeadline) ? (clcDeadline > 0 ? true : false) : "invalid"

  return (
    <div className="grow-card">
      <div className="card-img">
        {deadline && (
          <div className="dead-line">
            <span>مهلت دریافت</span>
            <span>
              {clc
                ? `${clcDeadline.getDate()} روز و ${clcDeadline.getHours()} ساعت مانده`
                : `منقضی شده`}
            </span>
          </div>
        )}
        <img
          className={`cover ${!clc ? "disable-card" : ""}`}
          src={img}
          alt="card"
        />
        <img
          className="dots"
          src="https://taaghche.com/images/rooyesh/Dots.svg"
          alt="dots"
        />
      </div>
      <div className="card-info">
        <span className="point-card">
          <span>{point}</span>
          <img width="30px" height="30px" src={leave} alt="leave" />
        </span>
        <Link href={`/rooyesh/detile/?id=${id}`}>{clc ? "مشاهده و دریافت" : "مشاهده"}</Link>
      </div>
    </div>
  )
}

export default Card
