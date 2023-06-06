// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="title-heading">{title}</h1>
      <p className="role-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="logo-image" />
      </div>
    </li>
  )
}

export default CardItem
