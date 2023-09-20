// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, onClickImg, isActive} = props
  const {
    id,
    imageUrl,
    imageAltText,
    thumbnailUrl,
    thumbnailAltText,
  } = imgDetails
  const clickImg = () => {
    onClickImg(id, imageUrl, imageAltText)
  }
  const changeOpacity = isActive ? 'img-opacity' : ''
  return (
    <li>
      <img
        onClick={clickImg}
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`image ${changeOpacity}`}
      />
    </li>
  )
}

export default ThumbnailItem
