import "./header.scss"
import logo from "../../assets/logo.jpg"
import menu from "../../assets/menu.jpg"
import search from "../../assets/search.jpg"
import Button from "../button/button"
import Search from "../search/search"
import Link from "../../Link"

function Header() {
  return (
    <header className="header">
      <div className="first-menu">
        <Button className="hid-button" icon={menu} />
        <Button className="hid-button" icon={search} />
        <div className="logo hid-element">
          <img height="60px" width="160px" src={logo} alt="logo" />
        </div>
        <Link href="/#" className="hid-element">دسته بندی</Link>
        <Link href="/rooyesh" className="hid-element">رویش</Link>
        <Link href="/#" className="hid-element">صوتی</Link>
        <Search className="hid-element" />
      </div>
      <div className="secound-menu">
      <div className="logo hid-button">
          <img height="60px" width="160px" src={logo} alt="logo" />
        </div>
      </div>
      <div className="thrid-menu">
        <Button text="نصب طاقچه" color="#00a2a4" />
      </div>
    </header>
  )
}

export default Header
