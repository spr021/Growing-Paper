import "./button.scss"

function Button({ text, icon, color, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`button  ${className}`}
      style={{ backgroundColor: color }}
    >
      {icon && <img className={className} src={icon} alt={text} />}
      <span className={className}>{text}</span>
    </button>
  )
}

export default Button
