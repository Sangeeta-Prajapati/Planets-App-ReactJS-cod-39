// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {imageUrl, name, description} = planetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="des">{description}</p>
    </div>
  )
}

export default PlanetItem
