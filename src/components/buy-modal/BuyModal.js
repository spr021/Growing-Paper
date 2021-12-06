import Button from "../button/button"
import Modal from "../modal/Modal"
import colorPaper from "../../assets/coloredPaper.png"
import "./BuyModal.scss"
import Card from "../card/Card"
import Link from "../../Link"

function makeid(length) {
  let result = ""
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function BuyModal({ openModal, setOpenModal, content }) {
  const code = makeid(12)

  return (
    <Modal isOpen={openModal} changeIsOpen={setOpenModal}>
      <div className="buy-modal-content">
        <div className="buy-modal-text">
          <h2>تبریک :)</h2>
          <h4>جایزه با موفقیت فعال شد</h4>
          <span>همواره میتونی ین جایزه را در قسمت (جایزه های من) ببینی</span>
          <div>
            <span>مهلت استفاده : </span>
            <strong>۱۰ روز</strong>
          </div>
          <div className="buy-modal-buttons">
            <Button
              onClick={navigator.clipboard.writeText(code)}
              className="copy"
              text="کپی کردن"
            />
            <Button className="code" text={code} />
          </div>
          <Link href="/">
            <Button className="ok" text="متوجه شدم" />
          </Link>
        </div>
        <div className="buy-modal-card">
          <img
            width="600px"
            height="350px"
            className="buy-modal-card-img"
            src={colorPaper}
            alt="colored-paper"
          />
          <Card {...content} />
        </div>
      </div>
    </Modal>
  )
}

export default BuyModal
