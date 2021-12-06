import LeavesBaner from "../../components/leaves-baner/leavesBaner"
import "./CardPage.scss"
import cardList from "../../mock-data/grow"
import Card from "../../components/card/Card"

function CardPage({point}) {
  
  return (
    <>
      <LeavesBaner point={point} />
      <div className="card-continer">
        {cardList.cards.map((card) => <Card key={card.img} {...card} />)}
      </div>
    </>
  )
}

export default CardPage
