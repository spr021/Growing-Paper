import "./dateBar.scss"

function DateBar({ date }) {
  const selected = (day) => {
    if (+date.currentday === day) return "selected"
    return ""
  }

  return (
    <div className="data-bar">
      <div className="month">{date.month}</div>
      <div className="days">
        <div className={selected(+date.firstday)}>
          <span>ش</span>
          <span>{+date.firstday}</span>
        </div>
        <div className={selected(+date.firstday + 1)}>
          <span>ی</span>
          <span>{+date.firstday + 1}</span>
        </div>
        <div className={selected(+date.firstday + 2)}>
          <span>د</span>
          <span>{+date.firstday + 2}</span>
        </div>
        <div className={selected(+date.firstday + 3)}>
          <span>س</span>
          <span>{+date.firstday + 3}</span>
        </div>
        <div className={selected(+date.firstday + 4)}>
          <span>چ</span>
          <span>{+date.firstday + 4}</span>
        </div>
        <div className={selected(+date.firstday + 5)}>
          <span>پ</span>
          <span>{+date.firstday + 5}</span>
        </div>
        <div className={selected(+date.firstday + 6)}>
          <span>ج</span>
          <span>{+date.firstday + 6}</span>
        </div>
      </div>
    </div>
  )
}

export default DateBar
