import './styles.css'

export const TVShow = ({ title, image, addFavourite}) => {
    return (
        <div>
          <h3>{title}</h3>
          <img src={image} />
        </div>
    )
}