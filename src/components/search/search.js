import "./search.scss"
import search from "../../assets/search.jpg"

function Search({className}) {
  return (
    <div className={`search-box ${className}`}>
      <img width="50px" height="50px" src={search} className={`search-icon ${className}`} alt="search" />
      <input type="search" className={`search ${className}`} />
    </div>
  )
}

export default Search
