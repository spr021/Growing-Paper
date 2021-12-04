import LeavesBaner from "../../components/leaves-baner/leavesBaner"
import "./CardPage.scss"
import cardList from "../../mock-data/grow.json"
import Card from "../../components/card/Card"

function CardPage() {
  return (
    <>
      <LeavesBaner point={cardList.point} />
      <div className="card-continer">
        {cardList.cards.map((card) => <Card key={card.img} {...card} />)}
      </div>
    </>
  )
}

export default CardPage
