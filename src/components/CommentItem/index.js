// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, time, isLiked, initialClassName} = commentDetails
  const initial = name[0]
  const postedTime = formatDistanceToNow(time)
  const likeClassName = isLiked ? 'button active' : 'button'
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickDeleteButton = () => {
    deleteComment(id)
  }

  const onClikLikeButton = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="comment-item">
      <div className="initial-name-comment-container">
        <div className="initial-container">
          <p className={`initial ${initialClassName}`}>{initial}</p>
        </div>
        <div className="name-comment-container">
          <div className="name-date-container">
            <p className="name">{name}</p>
            <p className="date">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={likeImgUrl} alt="like" className="like-icon" />
          <button
            type="button"
            className={likeClassName}
            onClick={onClikLikeButton}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
